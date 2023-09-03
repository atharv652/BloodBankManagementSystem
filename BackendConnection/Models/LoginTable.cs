using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class LoginTable
{
    public int Id { get; set; }

    public string Fullname { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Pincode { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Contact { get; set; }

    public string? BloodGrp { get; set; }

    public string? Gender { get; set; }

    public int? RoleId { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<RequestTable> RequestTables { get; set; } = new List<RequestTable>();

    public virtual Role? Role { get; set; }
}
