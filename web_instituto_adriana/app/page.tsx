import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2 className="mb-3">Bienvenidos al IES Cura Valera</h2>

      <p className="mb-4">
        Bienvenidos a la página web del IES Cura Valera. Aquí encontrarás
        información sobre el centro y su oferta educativa.
      </p>

      <div className="row">
        {/* CARDS */}
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <Image
                  src="/eso.jpg"
                  alt="Oferta educativa"
                  width={600}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Oferta Educativa</h5>
                  <p className="card-text">
                    Conoce nuestras enseñanzas de ESO, Bachillerato y FP.
                  </p>
                  <Link
                    href="/oferta-educativa/eso"
                    className="btn btn-primary"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <Image
                  src="/noticias.jpg"
                  alt="Noticias"
                  width={600}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Noticias</h5>
                  <p className="card-text">
                    Últimas noticias, actividades y avisos importantes.
                  </p>
                  <Link href="/noticias/ultimas" className="btn btn-primary">
                    Ver noticias
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Canal del centro</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/BwERsLlAuAc"
                  title="YouTube"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Biblioweb Séneca</h5>
              <Image
                src="/biblioweb.png"
                alt="Biblioweb"
                width={400}
                height={200}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Link
                href="/biblioteca/biblioweb"
                className="btn btn-outline-primary w-100 mt-3"
              >
                Ir a Biblioweb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
