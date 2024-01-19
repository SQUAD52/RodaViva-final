using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apirodaviva.Context;
using apirodaviva.Models;

namespace apirodaviva.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalentosController : ControllerBase
    {
        private readonly DataContext _context;

        public TalentosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Talentos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Talentos>>> GetTalentos()
        {
            return await _context.Talentos.ToListAsync();
        }

        // GET: api/Talentos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Talentos>> GetTalentos(int id)
        {
            var talentos = await _context.Talentos.FindAsync(id);

            if (talentos == null)
            {
                return NotFound();
            }

            return talentos;
        }

        // PUT: api/Talentos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTalentos(int id, Talentos talentos)
        {
            if (id != talentos.IdTalento)
            {
                return BadRequest();
            }

            _context.Entry(talentos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TalentosExists(id))
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

        // POST: api/Talentos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Talentos>> PostTalentos(Talentos talentos)
        {
            _context.Talentos.Add(talentos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTalentos", new { id = talentos.IdTalento }, talentos);
        }

        // DELETE: api/Talentos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTalentos(int id)
        {
            var talentos = await _context.Talentos.FindAsync(id);
            if (talentos == null)
            {
                return NotFound();
            }

            _context.Talentos.Remove(talentos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TalentosExists(int id)
        {
            return _context.Talentos.Any(e => e.IdTalento == id);
        }
    }
}
