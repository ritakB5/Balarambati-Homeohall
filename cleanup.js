const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files and directories to keep
const KEEP_FILES = [
  // Backend
  'backend/package.json',
  'backend/package-lock.json',
  'backend/tsconfig.json',
  'backend/.env',
  'backend/.env.example',
  'backend/src/server.ts',
  'backend/src/config/database.ts',
  'backend/src/middleware/auth.ts',
  'backend/src/middleware/errorHandler.ts',
  'backend/src/middleware/validators/scheduleValidators.ts',
  'backend/src/models/Schedule.ts',
  'backend/src/controllers/schedules.ts',
  'backend/src/routes/schedules.ts',
  'backend/src/utils/logger.ts',
  // Frontend
  'frontend/package.json',
  'frontend/package-lock.json',
  'frontend/tsconfig.json',
  'frontend/public/index.html',
  'frontend/src/App.tsx',
  'frontend/src/main.tsx',
  'frontend/src/components/doctors/DoctorSchedule.tsx',
  'frontend/src/components/doctors/DoctorCard.tsx',
  'frontend/src/components/doctors/DoctorDetail.tsx',
  'frontend/src/components/layout',
  'frontend/src/components/ui'
];

// Directories to clean
const DIRECTORIES = [
  'backend/node_modules',
  'frontend/node_modules',
  'backend/dist',
  'frontend/dist',
  'backend/.next',
  'frontend/.next'
];

// Function to delete directory recursively
function deleteDirectory(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      const currentPath = path.join(directory, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteDirectory(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    if (directory !== path.join('backend', 'src') && 
        directory !== path.join('frontend', 'src') &&
        directory !== 'backend' && 
        directory !== 'frontend') {
      fs.rmdirSync(directory);
    }
  }
}

// Function to clean up directories
function cleanDirectories() {
  console.log('🧹 Cleaning up directories...');
  
  // Clean up node_modules and build directories
  DIRECTORIES.forEach(dir => {
    console.log(`🧹 Removing ${dir}...`);
    deleteDirectory(dir);
  });

  // Clean up backend/src and frontend/src except for kept files
  const cleanSrcDirectory = (baseDir, keepFiles) => {
    const srcDir = path.join(process.cwd(), baseDir);
    if (!fs.existsSync(srcDir)) return;

    fs.readdirSync(srcDir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(srcDir, dirent.name);
      const relativePath = path.relative(process.cwd(), fullPath);
      const isKept = keepFiles.some(keepPath => 
        relativePath.replace(/\\/g, '/') === keepPath.replace(/\\/g, '/')
      );

      if (!isKept) {
        if (dirent.isDirectory()) {
          deleteDirectory(fullPath);
        } else {
          fs.unlinkSync(fullPath);
        }
        console.log(`🗑️  Removed: ${relativePath}`);
      }
    });
  };

  // Clean backend/src and frontend/src
  cleanSrcDirectory('backend/src', KEEP_FILES);
  cleanSrcDirectory('frontend/src', KEEP_FILES);

  console.log('✅ Cleanup complete!');
  console.log('\nNext steps:');
  console.log('1. Run `npm install` in both backend and frontend directories');
  console.log('2. Start the development servers');
}

// Run the cleanup
cleanDirectories();
