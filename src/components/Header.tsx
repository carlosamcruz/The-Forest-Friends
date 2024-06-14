export default function Header(){
    return(
        <header className="p-4 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end justify-content-center">

            <a href="/" className="justify-content-start" style={{textDecoration: "none"}}>
              <h1 className="fw-bold text-light d-flex align-items-end">
                <img src="/capmac.svg" width="120" className="me-3"/>
                {"The Forest Friends"}
              </h1>
            </a>
            <div className="text-end col-7">
              <button type="button" className="btn btn-outline-light me-2">
                <img src="/capmac.svg" width="24" className="me-3"/>
                Login
              </button>
              {/*<a href="/create" className="btn btn-warning">Pedir Ajuda </a> */}

            </div>

          </div>

        </div>
      </header>
    )
}