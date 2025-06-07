
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface DaySchedule {
  day: string;
  morning?: { start: string; end: string };
  evening?: { start: string; end: string };
  isAvailable: boolean;
}

interface DoctorScheduleProps {
  doctorId: string;
}

// Mock data - in a real app this would come from your backend
const mockSchedule: Record<string, DaySchedule[]> = {
  "doc-1": [
    { day: "Monday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
    { day: "Tuesday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
    { day: "Wednesday", morning: { start: "10:00", end: "13:00" }, evening: undefined, isAvailable: true },
    { day: "Thursday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
    { day: "Friday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
    { day: "Saturday", morning: { start: "10:00", end: "14:00" }, evening: undefined, isAvailable: true },
    { day: "Sunday", morning: undefined, evening: undefined, isAvailable: false }
  ],
  "doc-2": [
    { day: "Monday", morning: { start: "09:00", end: "12:00" }, evening: { start: "17:00", end: "20:00" }, isAvailable: true },
    { day: "Tuesday", morning: undefined, evening: undefined, isAvailable: false },
    { day: "Wednesday", morning: { start: "09:00", end: "12:00" }, evening: { start: "17:00", end: "20:00" }, isAvailable: true },
    { day: "Thursday", morning: undefined, evening: undefined, isAvailable: false },
    { day: "Friday", morning: { start: "09:00", end: "12:00" }, evening: { start: "17:00", end: "20:00" }, isAvailable: true },
    { day: "Saturday", morning: { start: "09:00", end: "14:00" }, evening: undefined, isAvailable: true },
    { day: "Sunday", morning: undefined, evening: undefined, isAvailable: false }
  ]
};

// Default schedule for new doctors
const defaultSchedule: DaySchedule[] = [
  { day: "Monday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
  { day: "Tuesday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
  { day: "Wednesday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
  { day: "Thursday", morning: { start: "10:00", end: "13:00" }, evening: { start: "16:00", end: "19:00" }, isAvailable: true },
  { day: "Friday", morning: undefined, evening: undefined, isAvailable: false },
  { day: "Saturday", morning: { start: "10:00", end: "14:00" }, evening: undefined, isAvailable: true },
  { day: "Sunday", morning: undefined, evening: undefined, isAvailable: false }
];

const DoctorSchedule: React.FC<DoctorScheduleProps> = ({ doctorId }) => {
  // This would fetch data from your backend in a real application
  // Use mock data for now, with a fallback to default schedule for new doctors
  const schedule = mockSchedule[doctorId] || defaultSchedule;
  
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Morning</TableHead>
            <TableHead>Evening</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((day) => (
            <TableRow key={day.day}>
              <TableCell className="font-medium">{day.day}</TableCell>
              <TableCell>
                {day.morning ? `${day.morning.start} - ${day.morning.end}` : 'Not available'}
              </TableCell>
              <TableCell>
                {day.evening ? `${day.evening.start} - ${day.evening.end}` : 'Not available'}
              </TableCell>
              <TableCell>
                {day.isAvailable ? (
                  <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
                ) : (
                  <Badge variant="outline" className="text-gray-500 border-gray-300">Unavailable</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorSchedule;
