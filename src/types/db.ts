export interface DriverInsert {
  driver_number: number;
  first_name: string;
  last_name: string;
  team_id: number | null;
}

export interface TeamInsert {
  name: string;
}

export interface TrackInsert {
  name: string;
}

export interface RaceInsert {
  round_number: number;
  location: string;
  race_date: string;
  race_time_utc: string;
  has_sprint: boolean;
  track_id: number;
}
