using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class Payment
{
    public int Pid { get; set; }

    public string? Address { get; set; }

    public string? PaymentMethod { get; set; }

    public int? Id { get; set; }

    public int Sid { get; set; }

    public virtual Stock? IdNavigation { get; set; }
}
