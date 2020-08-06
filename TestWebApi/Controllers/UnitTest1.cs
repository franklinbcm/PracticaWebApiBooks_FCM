using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApiPractice.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiPractice.Controllers.Tests
{
    [TestClass()]
    public class UnitTest1
    {
        [TestMethod()]
        public void GetAuthorBooksTest()
        {
            Assert.AreEqual(1,1);
        }
    }
}