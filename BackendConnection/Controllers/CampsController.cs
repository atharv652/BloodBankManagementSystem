using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendConnection.Models;

namespace BackendConnection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampsController : ControllerBase
    {
        private readonly LifestreamContext _context;

        public CampsController(LifestreamContext context)
        {
            _context = context;
        }

        // GET: api/Camps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Camp>>> GetCamps()
        {
          if (_context.Camps == null)
          {
              return NotFound();
          }
            return await _context.Camps.ToListAsync();
        }

        // GET: api/Camps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Camp>> GetCamp(int id)
        {
          if (_context.Camps == null)
          {
              return NotFound();
          }
            var camp = await _context.Camps.FindAsync(id);

            if (camp == null)
            {
                return NotFound();
            }

            return camp;
        }

        // PUT: api/Camps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCamp(int id, Camp camp)
        {
            if (id != camp.Cid)
            {
                return BadRequest();
            }

            _context.Entry(camp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CampExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Camps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Camp>> PostCamp(Camp camp)
        {
          if (_context.Camps == null)
          {
              return Problem("Entity set 'LifestreamContext.Camps'  is null.");
          }
            _context.Camps.Add(camp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCamp", new { id = camp.Cid }, camp);
        }

        // DELETE: api/Camps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCamp(int id)
        {
            if (_context.Camps == null)
            {
                return NotFound();
            }
            var camp = await _context.Camps.FindAsync(id);
            if (camp == null)
            {
                return NotFound();
            }

            _context.Camps.Remove(camp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CampExists(int id)
        {
            return (_context.Camps?.Any(e => e.Cid == id)).GetValueOrDefault();
        }
    }
}
