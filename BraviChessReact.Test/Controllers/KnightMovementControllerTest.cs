using BraviChessReact.Controllers;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace BraviChessReact.TestMSTest.Controllers
{
    [TestClass]
    public class KnightMovementControllerTest
    {
        [TestMethod]
        public void Deveria_retornar_C2_e_B3_quando_enviar_posicao_A1()
        {
            // Arrange
            var controller = new KnightMovementController();

            // Act
            var result = controller.Teste("A1").ToList();

            // Assert
            result.Count.Should().Be(2);
            result.Should().Contain("C2");
            result.Should().Contain("B3");
        }

        [TestMethod]
        public void Deveria_retornar_C5_C3_D6_F6_G5_G3_F2_D2_quando_enviar_posicao_E4()
        {
            // Arrange
            var controller = new KnightMovementController();

            // Act
            var result = controller.Teste("E4").ToList();
           
            // Assert
            result.Count.Should().Be(8);
            result.Should().Contain("C5");
            result.Should().Contain("C3");
            result.Should().Contain("D6");
            result.Should().Contain("F6");
            result.Should().Contain("G5");
            result.Should().Contain("G3");
            result.Should().Contain("F2");
            result.Should().Contain("D2");
        }

        [TestMethod]
        public void Deveria_retornar_A7_B6_D6_E7_quando_enviar_posicao_C8()
        {
            // Arrange
            var controller = new KnightMovementController();

            // Act
            var result = controller.Teste("C8").ToList();

            // Assert
            result.Count.Should().Be(4);
            result.Should().Contain("A7");
            result.Should().Contain("B6");
            result.Should().Contain("D6");
            result.Should().Contain("E7");
        }
    }
}
