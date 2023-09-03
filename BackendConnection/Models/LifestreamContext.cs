using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BackendConnection.Models;

public partial class LifestreamContext : DbContext
{
    public LifestreamContext()
    {
    }

    public LifestreamContext(DbContextOptions<LifestreamContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Camp> Camps { get; set; }

    public virtual DbSet<DonorHistory> DonorHistories { get; set; }

    public virtual DbSet<LoginTable> LoginTables { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<RequestTable> RequestTables { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=lifestream", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Camp>(entity =>
        {
            entity.HasKey(e => e.Cid).HasName("PRIMARY");

            entity.ToTable("camps");

            entity.HasIndex(e => e.Date, "donor_date_idx");

            entity.Property(e => e.Cid).HasColumnName("cid");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .HasColumnName("location");
            entity.Property(e => e.Time)
                .HasColumnType("time")
                .HasColumnName("time");
        });

        modelBuilder.Entity<DonorHistory>(entity =>
        {
            entity.HasKey(e => e.Hid).HasName("PRIMARY");

            entity.ToTable("donor_history");

            entity.HasIndex(e => e.Cid, "cid_idx");

            entity.Property(e => e.Hid).HasColumnName("hid");
            entity.Property(e => e.Cid).HasColumnName("cid");
            entity.Property(e => e.Did).HasColumnName("did");
            entity.Property(e => e.DonationDate).HasColumnName("donation_date");
            entity.Property(e => e.DonorDate)
                .HasMaxLength(6)
                .HasColumnName("donor_date");

            entity.HasOne(d => d.CidNavigation).WithMany(p => p.DonorHistories)
                .HasForeignKey(d => d.Cid)
                .HasConstraintName("cid");
        });

        modelBuilder.Entity<LoginTable>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login_table");

            entity.HasIndex(e => e.RoleId, "role_idfk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.BloodGrp)
                .HasMaxLength(10)
                .HasColumnName("blood_grp");
            entity.Property(e => e.City)
                .HasMaxLength(255)
                .HasColumnName("city");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.Fullname)
                .HasMaxLength(255)
                .HasColumnName("fullname");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Pincode)
                .HasMaxLength(255)
                .HasColumnName("pincode");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.LoginTables)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("role_idfk1");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Pid).HasName("PRIMARY");

            entity.ToTable("payments");

            entity.HasIndex(e => e.Id, "id2_idx");

            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(255)
                .HasColumnName("payment_method");
            entity.Property(e => e.Sid).HasColumnName("sid");

            entity.HasOne(d => d.IdNavigation).WithMany(p => p.Payments)
                .HasForeignKey(d => d.Id)
                .HasConstraintName("id2");
        });

        modelBuilder.Entity<RequestTable>(entity =>
        {
            entity.HasKey(e => e.Rid).HasName("PRIMARY");

            entity.ToTable("request_table");

            entity.HasIndex(e => e.Id, "idfk_idx");

            entity.Property(e => e.Rid).HasColumnName("rid");
            entity.Property(e => e.BloodGrp)
                .HasMaxLength(255)
                .HasColumnName("blood_grp");
            entity.Property(e => e.DateTime)
                .HasColumnType("datetime")
                .HasColumnName("date_time");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Qty).HasColumnName("qty");

            entity.HasOne(d => d.IdNavigation).WithMany(p => p.RequestTables)
                .HasForeignKey(d => d.Id)
                .HasConstraintName("idfk");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.RoleId)
                .ValueGeneratedNever()
                .HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(10)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => e.Sid).HasName("PRIMARY");

            entity.ToTable("stock");

            entity.Property(e => e.Sid).HasColumnName("sid");
            entity.Property(e => e.BloodGrp)
                .HasMaxLength(45)
                .HasColumnName("blood_grp");
            entity.Property(e => e.Desc)
                .HasMaxLength(150)
                .HasColumnName("desc");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.Qty).HasColumnName("qty");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
