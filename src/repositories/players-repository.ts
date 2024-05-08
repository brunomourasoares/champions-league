import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

var database: PlayerModel[] = [
    {
      "id": 1,
      "name": "Lionel Messi",
      "club": "Paris Saint-Germain",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "club": "Manchester United",
      "nationality": "Portugal",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 89,
        "Shooting": 93,
        "Passing": 81,
        "Dribbling": 88,
        "Defending": 41,
        "Physical": 78
      }
    },
    {
      "id": 3,
      "name": "Neymar Jr",
      "club": "Paris Saint-Germain",
      "nationality": "Brazil",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 91,
        "Shooting": 85,
        "Passing": 86,
        "Dribbling": 96,
        "Defending": 36,
        "Physical": 62
      }
    },
    {
      "id": 4,
      "name": "Kylian Mbappé",
      "club": "Paris Saint-Germain",
      "nationality": "France",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 96,
        "Shooting": 84,
        "Passing": 78,
        "Dribbling": 91,
        "Defending": 41,
        "Physical": 76
      }
    },
    {
      "id": 5,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "Midfielder",
      "statistics": {
        "Overall": 91,
        "Pace": 76,
        "Shooting": 86,
        "Passing": 93,
        "Dribbling": 87,
        "Defending": 64,
        "Physical": 78
      }
    },
    {
      "id": 6,
      "name": "Robert Lewandowski",
      "club": "Bayern Munich",
      "nationality": "Poland",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 78,
        "Shooting": 93,
        "Passing": 80,
        "Dribbling": 82,
        "Defending": 45,
        "Physical": 82
      }
    },
    {
      "id": 7,
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Egypt",
      "position": "Forward",
      "statistics": {
        "Overall": 90,
        "Pace": 93,
        "Shooting": 85,
        "Passing": 81,
        "Dribbling": 89,
        "Defending": 45,
        "Physical": 74
      }
    },
    {
      "id": 8,
      "name": "Sadio Mané",
      "club": "Liverpool",
      "nationality": "Senegal",
      "position": "Forward",
      "statistics": {
        "Overall": 88,
        "Pace": 94,
        "Shooting": 82,
        "Passing": 79,
        "Dribbling": 88,
        "Defending": 49,
        "Physical": 77
      }
    },
    {
      "id": 9,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "Defender",
      "statistics": {
        "Overall": 90,
        "Pace": 77,
        "Shooting": 60,
        "Passing": 75,
        "Dribbling": 72,
        "Defending": 90,
        "Physical": 86
      }
    },
    {
      "id": 10,
      "name": "Jan Oblak",
      "club": "Atlético Madrid",
      "nationality": "Slovenia",
      "position": "Goalkeeper",
      "statistics": {
        "Overall": 91,
        "Pace": 89,
        "Shooting": 60,
        "Passing": 68,
        "Dribbling": 70,
        "Defending": 88,
        "Physical": 90
      }
    },
    {
      "id": 11,
      "name": "Harry Kane",
      "club": "Tottenham Hotspur",
      "nationality": "England",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 70,
        "Shooting": 92,
        "Passing": 81,
        "Dribbling": 80,
        "Defending": 47,
        "Physical": 84
      }
    },
    {
      "id": 12,
      "name": "Erling Haaland",
      "club": "Borussia Dortmund",
      "nationality": "Norway",
      "position": "Forward",
      "statistics": {
        "Overall": 89,
        "Pace": 84,
        "Shooting": 88,
        "Passing": 73,
        "Dribbling": 82,
        "Defending": 39,
        "Physical": 84
      }
    },
    {
      "id": 13,
      "name": "Bruno Fernandes",
      "club": "Manchester United",
      "nationality": "Portugal",
      "position": "Midfielder",
      "statistics": {
        "Overall": 89,
        "Pace": 77,
        "Shooting": 86,
        "Passing": 87,
        "Dribbling": 85,
        "Defending": 63,
        "Physical": 76
      }
    },
    {
      "id": 14,
      "name": "Joshua Kimmich",
      "club": "Bayern Munich",
      "nationality": "Germany",
      "position": "Midfielder",
      "statistics": {
        "Overall": 89,
        "Pace": 76,
        "Shooting": 75,
        "Passing": 89,
        "Dribbling": 85,
        "Defending": 81,
        "Physical": 84
    }
  },
  {
    "id": 15,
    "name": "Raheem Sterling",
    "club": "Manchester City",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "Overall": 88,
      "Pace": 93,
      "Shooting": 83,
      "Passing": 80,
      "Dribbling": 88,
      "Defending": 45,
      "Physical": 73
    }
  },
  {
    "id": 16,
    "name": "Karim Benzema",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 83,
      "Shooting": 89,
      "Passing": 80,
      "Dribbling": 84,
      "Defending": 43,
      "Physical": 79
    }
  },
  {
    "id": 17,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazil",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 90,
      "Pace": 68,
      "Shooting": 64,
      "Passing": 77,
      "Dribbling": 73,
      "Defending": 88,
      "Physical": 85
    }
  },
  {
    "id": 18,
    "name": "Sergio Ramos",
    "club": "Paris Saint-Germain",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "Overall": 89,
      "Pace": 75,
      "Shooting": 70,
      "Passing": 79,
      "Dribbling": 74,
      "Defending": 89,
      "Physical": 86
    }
  },
  {
    "id": 19,
    "name": "Trent Alexander-Arnold",
    "club": "Liverpool",
    "nationality": "England",
    "position": "Defender",
    "statistics": {
      "Overall": 87,
      "Pace": 82,
      "Shooting": 76,
      "Passing": 84,
      "Dribbling": 82,
      "Defending": 80,
      "Physical": 77
    }
  },
  {
    "id": 20,
    "name": "Jadon Sancho",
    "club": "Manchester United",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "Overall": 88,
      "Pace": 90,
      "Shooting": 81,
      "Passing": 82,
      "Dribbling": 88,
      "Defending": 44,
      "Physical": 75
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel|undefined> => {
  return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deletePlayerById = async (id: number) => {
  const index = database.findIndex(player => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
};

export const modifyPlayerById = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
}