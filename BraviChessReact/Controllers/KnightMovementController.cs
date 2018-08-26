using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace BraviChessReact.Controllers
{
    public class KnightMovementController : Controller
    {
        public List<string> Get(string position)
        {
            if (position == null)
                return null;

            var x = ConverteLetraEmNumero(position.Substring(0, 1));
            var y = Convert.ToInt32(position.Substring(1, 1));

            var positions = new List<string>();

            AddPosition(positions, x, y, -2, 1);
            AddPosition(positions, x, y, -2, -1);
            AddPosition(positions, x, y, +2, +1);
            AddPosition(positions, x, y, +2, -1);
            AddPosition(positions, x, y, -1, +2);
            AddPosition(positions, x, y, +1, +2);
            AddPosition(positions, x, y, -1, -2);
            AddPosition(positions, x, y, +1, -2);

            return positions;
        }

        private void AddPosition(List<string> positions, int x, int y, int xNext, int yNext)
        {
            var xAtual = x + xNext;
            if (xAtual < 1 || xAtual > 8)
                return;

            var yAtual = y + yNext;
            if (yAtual < 1 || yAtual > 8)
                return;

            var xLetra = ConverteNumeroEmLetra(xAtual);

            positions.Add($"{xLetra}{yAtual}");
        }

        private int ConverteLetraEmNumero(string letra)
        {
            switch (letra)
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

        private string ConverteNumeroEmLetra(int numero)
        {
            switch (numero)
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
