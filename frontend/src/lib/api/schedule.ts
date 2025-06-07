// src/lib/api/schedule.ts
import type { ScheduleFormValues } from '@/components/admin/ScheduleForm';

export async function saveDoctorSchedule(doctorId: string, schedule: ScheduleFormValues) {
  // Simulate API call. Replace with actual API endpoint as needed.
  // Example: const response = await fetch(`/api/schedules/${doctorId}`, ...)
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      // Persist to localStorage for demo
      let allSchedules = JSON.parse(localStorage.getItem('doctorSchedules') || '{}');
      allSchedules[doctorId] = schedule;
      localStorage.setItem('doctorSchedules', JSON.stringify(allSchedules));
      resolve({ success: true });
    }, 700);
  });
}

export async function getDoctorSchedules(): Promise<Record<string, ScheduleFormValues>> {
  // Simulate API call. Replace with actual API endpoint as needed.
  return new Promise((resolve) => {
    setTimeout(() => {
      const schedules = JSON.parse(localStorage.getItem('doctorSchedules') || '{}');
      resolve(schedules);
    }, 400);
  });
}
