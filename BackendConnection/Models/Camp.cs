using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class Camp
{
    public int Cid { get; set; }

    public string Location { get; set; } = null!;

    public DateOnly Date { get; set; }

    public TimeOnly Time { get; set; }

    public virtual ICollection<DonorHistory> DonorHistories { get; set; } = new List<DonorHistory>();
}
