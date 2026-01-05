export interface OpenF1Driver {
  driver_number: number;
  first_name: string;
  last_name: string;
  full_name: string;
  team_name: string;
  country_code: string;
}

export interface OpenF1Meeting {
  meeting_key: number;
  meeting_name: string;
  location: string;
  date_start: string;
  has_sprint: boolean;
}

export interface OpenF1Result {
  meeting_key: number;
  driver_number: number;
  position: number;
  points: number;
}
