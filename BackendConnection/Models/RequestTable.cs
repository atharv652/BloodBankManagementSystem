using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class RequestTable
{
    public int Rid { get; set; }

    public string BloodGrp { get; set; } = null!;

    public int Qty { get; set; }

    public DateTime DateTime { get; set; }

    public int? Id { get; set; }

    public virtual LoginTable? IdNavigation { get; set; }
}
