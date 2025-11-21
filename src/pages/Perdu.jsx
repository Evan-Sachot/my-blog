import "./Perdu.css"
function Perdu() {
    return (
    <div className="perdu-container">
      <h1>Vous êtes perdu...</h1>
      <p>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Perdu