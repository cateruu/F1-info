export interface NextRaceAPI {
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

export interface NextRaceType {
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
