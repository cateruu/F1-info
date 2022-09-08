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
