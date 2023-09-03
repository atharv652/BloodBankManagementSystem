using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class DonorHistory
{
    public int Hid { get; set; }

    public int? Cid { get; set; }

    public DateOnly? DonationDate { get; set; }

    public DateTime? DonorDate { get; set; }

    public int Did { get; set; }

    public virtual Camp? CidNavigation { get; set; }
}
