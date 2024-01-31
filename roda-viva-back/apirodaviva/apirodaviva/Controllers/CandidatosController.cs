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
    public class CandidatosController : ControllerBase
    {
        private readonly DataContext _context;

        public CandidatosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Candidatos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidatos>>> GetCandidatos()
        {
            return await _context.Candidatos
                .Include(c => c.Empresa)
                .Include(c => c.Talento)
                .ToListAsync();
        }
        // GET: api/Candidatos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidatos>> GetCandidatos(int id)
        {
            var candidatos = await _context.Candidatos.FindAsync(id);

            if (candidatos == null)
            {
                return NotFound();
            }

            return candidatos;
        }

        // PUT: api/Candidatos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCandidatos(int id, Candidatos candidatos)
        {
            if (id != candidatos.IdCandidato)
            {
                return BadRequest();
            }

            _context.Entry(candidatos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CandidatosExists(id))
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

        // POST: api/Candidatos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Candidatos>> PostCandidatos(Candidatos candidatos)
        {
            _context.Candidatos.Add(candidatos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidatos", new { id = candidatos.IdCandidato }, candidatos);
        }

        // DELETE: api/Candidatos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCandidatos(int id)
        {
            var candidatos = await _context.Candidatos.FindAsync(id);
            if (candidatos == null)
            {
                return NotFound();
            }

            _context.Candidatos.Remove(candidatos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CandidatosExists(int id)
        {
            return _context.Candidatos.Any(e => e.IdCandidato == id);
        }
    }
}
