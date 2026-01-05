create table team (
  team_id serial primary key,
  team_name text not null unique
);

create table driver (
  driver_id serial primary key,
  first_name text not null,
  last_name text not null,
  driver_number int unique,
  team_id int not null references team(team_id)
);

create table track (
  track_id serial primary key,
  track_name text not null unique,
  turns int,
  elevation int,
  top_speed int,
  lap_record interval
);

create table race (
  race_id serial primary key,
  location text not null,
  track_id int not null references track(track_id),
  race_date date not null,
  race_time_utc time not null,
  round_number int not null,
  has_sprint boolean default false
);

create table qualifying (
  race_id int not null references race(race_id) on delete cascade,
  driver_id int not null references driver(driver_id) on delete cascade,
  position int not null,
  primary key (race_id, driver_id)
);

create table result (
  race_id int not null references race(race_id) on delete cascade,
  driver_id int not null references driver(driver_id) on delete cascade,
  grid_position int,
  position int,
  points numeric(4,1),
  status text default 'Finished',
  primary key (race_id, driver_id)
);

create table lap (
  race_id int not null references race(race_id) on delete cascade,
  driver_id int not null references driver(driver_id) on delete cascade,
  lap_number int not null,
  lap_time interval,
  tire text,
  primary key (race_id, driver_id, lap_number)
);
