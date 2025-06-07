import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL ? `${import.meta.env.VITE_BACKEND_URL}/api` : 'http://localhost:5000/api';

export interface ProfileData {
  name: string;
  email: string;
  phone?: string;
}

export interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  appointmentReminders: boolean;
  newAppointments: boolean;
}

export interface Preferences {
  language: string;
  timezone: string;
  dateFormat: string;
}

// API response type
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

export const settingsApi = {
  // Update profile
  async updateProfile(data: ProfileData): Promise<ApiResponse<ProfileData>> {
    try {
      const response = await axios.put(`${API_URL}/settings/profile`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return { data: response.data, success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { 
          error: error.response?.data?.message || 'Failed to update profile', 
          success: false 
        };
      }
      return { error: 'An unexpected error occurred', success: false };
    }
  },

  // Update password
  async updatePassword(data: Omit<PasswordData, 'confirmPassword'>): Promise<ApiResponse> {
    try {
      const response = await axios.put(
        `${API_URL}/settings/password`,
        { currentPassword: data.currentPassword, newPassword: data.newPassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return { data: response.data, success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { 
          error: error.response?.data?.message || 'Failed to update password', 
          success: false 
        };
      }
      return { error: 'An unexpected error occurred', success: false };
    }
  },

  // Update notification settings
  async updateNotifications(settings: NotificationSettings): Promise<ApiResponse<NotificationSettings>> {
    try {
      const response = await axios.put(
        `${API_URL}/settings/notifications`,
        settings,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return { data: response.data, success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { 
          error: error.response?.data?.message || 'Failed to update notifications', 
          success: false 
        };
      }
      return { error: 'An unexpected error occurred', success: false };
    }
  },

  // Update preferences
  async updatePreferences(preferences: Preferences): Promise<ApiResponse<Preferences>> {
    try {
      const response = await axios.put(
        `${API_URL}/settings/preferences`,
        preferences,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return { data: response.data, success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { 
          error: error.response?.data?.message || 'Failed to update preferences', 
          success: false 
        };
      }
      return { error: 'An unexpected error occurred', success: false };
    }
  },

  // Get user settings
  async getUserSettings(): Promise<ApiResponse<{
    profile: ProfileData;
    notifications: NotificationSettings;
    preferences: Preferences;
  }>> {
    try {
      const response = await axios.get(`${API_URL}/settings`, {
        withCredentials: true,
      });
      return { data: response.data, success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return { 
          error: error.response?.data?.message || 'Failed to fetch settings', 
          success: false 
        };
      }
      return { error: 'An unexpected error occurred', success: false };
    }
  },
};

export default settingsApi;
