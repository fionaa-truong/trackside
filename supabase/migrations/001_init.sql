create table driver (
  id serial primary key,
  name text not null,
  constructor text not null
);

create table track (
  id serial primary key,
  name text not null,
  turns int,
  elevation int
);

create table race (
  id serial primary key,
  track_id int references track(id),
  race_date date,
  has_sprint boolean
);

create table result (
  race_id int references race(id),
  driver_id int references driver(id),
  position int,
  points int,
  fastest_lap boolean,
  primary key (race_id, driver_id)
);
