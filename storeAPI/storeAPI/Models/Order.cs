using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace storeAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public decimal Total { get; set; }
        public decimal Discount { get; set; }
        public decimal GrandTotal { get; set; }
    }
}
