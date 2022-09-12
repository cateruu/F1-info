interface NextRaceAPI {
  MRData: {
    RaceTable: {
      Races: {
        Circuit: {
          Location: {
            country: string;
          };
          circuitId: string;
          circuitName: string;
        };
        FirstPractice: {
          date: string;
          time: string;
        };
        SecondPractice: {
          date: string;
          time: string;
        };
        ThirdPractice: {
          date: string;
          time: string;
        };
        Qualifying: {
          date: string;
          time: string;
        };
        date: string;
        raceName: string;
        round: string;
        season: string;
        time: string;
      }[];
      round: string;
      season: string;
    };
  };
}

interface NextRaceType {
  name: string;
  country: string;
  track: string;
  trackId: string;
  sessions: {
    fp1: {
      time: string;
      date: string;
    };
    fp2: {
      time: string;
      date: string;
    };
    fp3: {
      time: string;
      date: string;
    };
    qualifying: {
      time: string;
      date: string;
    };
    race: {
      time: string;
      date: string;
    };
  };
}

interface ResultAPI {
  MRData: {
    RaceTable: {
      Races: {
        Circuit: {
          Location: {
            country: string;
          };
        };
        Results: {}[];
        raceName: string;
      }[];
    };
  };
}

interface ResultDataType {
  country: string;
  name: string;
  results: {
    number: string;
    position: string;
    points: string;
    Driver: {
      givenName: string;
      familyName: string;
      driverId: string;
    };
    Constructor: {
      constructorId: string;
    };
    FastestLap: {
      rank: string;
    };
  }[];
}

interface ResultType {
  number: string;
  position: string;
  points: string;
  Driver: {
    givenName: string;
    familyName: string;
    driverId: string;
  };
  Constructor: {
    constructorId: string;
  };
  FastestLap: {
    rank: string;
  };
}

interface DriversStandingsAPI {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        DriverStandings: {
          position: string;
          points: string;
          Driver: {
            familyName: string;
            givenName: string;
          };
          Constructors: {
            constructorId: string;
          }[];
        }[];
      }[];
    };
  };
}

interface DriverType {
  position: string;
  points: string;
  Constructors: {
    constructorId: string;
  }[];
  Driver: {
    driverId: string;
    givenName: string;
    familyName: string;
  };
}

interface ConstructorsStandingsAPI {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        ConstructorStandings: {
          position: string;
          points: string;
          Constructor: {
            constructorId: string;
            name: string;
          }[];
        }[];
      }[];
    };
  };
}

interface ConstructorType {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
}

interface ScheduleAPI {
  MRData: {
    RaceTable: {
      Races: {}[];
      season: string;
    };
  };
}

interface ScheduleData {
  Circuit: {
    Location: {
      country: string;
    };
    circuitId: string;
    circuitName: string;
  };
  FirstPractice: {
    date: string;
    time: string;
  };
  SecondPractice: {
    date: string;
    time: string;
  };
  ThirdPractice: {
    date: string;
    time: string;
  };
  Qualifying: {
    date: string;
    time: string;
  };
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
}

interface DriversAPI {
  MRData: {
    DriverTable: {
      Drivers: {}[];
    };
  };
}

interface DriverData {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
}

interface ConstructorsAPI {
  MRData: {
    ConstructorTable: {
      Constructors: {}[];
    };
  };
}

interface ConstructorsData {
  constructorId: string;
  name: string;
  nationality: string;
}
