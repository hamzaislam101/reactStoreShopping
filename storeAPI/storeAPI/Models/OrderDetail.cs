using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace storeAPI.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public string ProductName { get; set; }
        public decimal Qty { get; set; }
        public decimal Rate { get; set; }

    }
}
