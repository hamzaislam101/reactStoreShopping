using storeAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace storeAPI.VM
{
    public class OrderVM
    {
        public OrderVM()
        {
            Items = new List<OrderDetail>();
        }
        public Order Order { get; set; }
        public List<OrderDetail> Items { get; set; }
    }
}
