

const Clients = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-14 pt-7 box-content">
      <div className="
        flex flex-col align-start justify-start
        md:flex-row md:align-center md:justify-between
        w-full gap-2
        ">
          <p className="text-lg">
            <span className="fw-700">16</span> clientes encontrados:
          </p>
          
          <div className="flex align-center gap-2">
            <p className="text-lg">Clientes por página: </p>

            <select name="ammount" id="ammount">
              <option value="16" selected>16</option>
            </select>
          </div>
      </div>

      <div
        className="
          mt-2"
      >
        
      </div>

      <button 
        className="
          py-3 mt-5 w-full
          rounded-sm bg-transparent
          brand-border border-2 border-solid
          text-center text-sm/4 fw-700 brand-text
          cursor-pointer"
      >
        Criar cliente
      </button>
    </section>
  )
}

export default Clients
