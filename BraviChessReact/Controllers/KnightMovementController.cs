using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BraviChessReact.Controllers
{
    [Route("api/[controller]")]
    public class KnightMovementController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<string> GetKnightMoves(string position)
        {
            if (position == null)
                return null;

            var currentCoordX = ConvertLetterToInt(position.Substring(0, 1));
            var currentCoordY = Convert.ToInt32(position.Substring(1, 1));

            var positions = new List<string>();

            AddPosition(positions, currentCoordX, currentCoordY, -2, 1);
            AddPosition(positions, currentCoordX, currentCoordY, -2, -1);
            AddPosition(positions, currentCoordX, currentCoordY, +2, +1);
            AddPosition(positions, currentCoordX, currentCoordY, +2, -1);
            AddPosition(positions, currentCoordX, currentCoordY, -1, +2);
            AddPosition(positions, currentCoordX, currentCoordY, +1, +2);
            AddPosition(positions, currentCoordX, currentCoordY, -1, -2);
            AddPosition(positions, currentCoordX, currentCoordY, +1, -2);

            return positions;
        }

        private void AddPosition(List<string> positions, int currentCoordX, int currentCoordY, int nextCoordX, int nextCoordY)
        {
            var newCoordX = currentCoordX + nextCoordX;
            if (newCoordX < 1 || newCoordX > 8)
                return;

            var newCoordY = currentCoordY + nextCoordY;
            if (newCoordY < 1 || newCoordY > 8)
                return;

            var newCoordXLetter = ConvertIntToLetter(newCoordX);

            positions.Add($"{newCoordXLetter}{newCoordY}");
        }

        private int ConvertLetterToInt(string letter)
        {
            switch (letter)
            {
                case "A":
                    return 1;
                case "B":
                    return 2;
                case "C":
                    return 3;
                case "D":
                    return 4;
                case "E":
                    return 5;
                case "F":
                    return 6;
                case "G":
                    return 7;
                case "H":
                    return 8;
                default:
                    return 0;
            }
        }

        private string ConvertIntToLetter(int number)
        {
            switch (number)
            {
                case 1:
                    return "A";
                case 2:
                    return "B";
                case 3:
                    return "C";
                case 4:
                    return "D";
                case 5:
                    return "E";
                case 6:
                    return "F";
                case 7:
                    return "G";
                case 8:
                    return "H";
                default:
                    return " ";
            }
        }
    }
}
