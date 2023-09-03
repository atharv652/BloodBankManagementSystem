using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class Stock
{
    public int Sid { get; set; }

    public string BloodGrp { get; set; } = null!;

    public int Qty { get; set; }

    public string? Desc { get; set; }

    public double Price { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
