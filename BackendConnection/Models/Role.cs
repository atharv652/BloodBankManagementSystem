using System;
using System.Collections.Generic;

namespace BackendConnection.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string RoleName { get; set; } = null!;

    public virtual ICollection<LoginTable> LoginTables { get; set; } = new List<LoginTable>();
}
