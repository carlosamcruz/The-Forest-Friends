import Footer from "./components/Footer";
import Header from "./components/Header";

//import { DefaultProvider, sha256, toHex, PubKey, bsv, TestWallet, Tx, toByteString } from "scrypt-ts";

export default function Home() {


  //let homenetwork = bsv.Networks.testnet;

  return (
    <>
      <Header/>

      <div className="container">

        <div className="row ps-5">
          <h2 className="lead m-4 fw-bold">
            Our Mission
          </h2>
          <p className="lead m-4"> 
            The Forest Friends is committed to safeguarding the world's forests and promoting sustainable livelihoods for forest-dependent communities. Our mission is to:
          </p>
          <p className="lead ms-4"> 
            Preserve Biodiversity: We strive to protect and restore the biodiversity of forests worldwide, recognizing their crucial role in regulating the Earth's climate, providing habitat for countless species, and sustaining human well-being.
          </p>

          <p className="lead m-4">
            Empower Communities: We work hand-in-hand with local communities to empower them as stewards of their natural resources, ensuring that conservation efforts benefit both people and the planet.
          </p>

          <p className="lead m-4">
            Promote Sustainability: We advocate for and implement sustainable practices in forest management, seeking to balance economic development with environmental protection for the benefit of present and future generations.
          </p>
                        
          <p className="lead m-4">
            Harness Innovation: We harness the power of innovation, technology, and collaboration to develop cutting-edge solutions for forest conservation and community development, driving positive change on a global scale.
          </p>

          <a href="/" className="justify-content-center" style={{textDecoration: "none"}}>
              <h1 className="fw-bold text-light d-flex align-items-center">
                <img src="/capmac.svg" width="200" className="me-3"/>
              </h1>
            </a>


          <h2 className="lead m-4 fw-bold">
          Innovation and originality
          </h2>
          <p className="lead m-4"> 
          Blockchain-Based Transparency:The integration of blockchain technology ensures transparency and trust in the data exchanged between The Forest Friends and participating communities. This innovative approach allows for the secure and immutable recording of transactions related to forest preservation efforts, enhancing accountability and reducing the risk of fraud or corruption.
          </p>
          <p className="lead ms-4"> 
          Tokenization of Trees:The concept of tokenizing trees and forest products is a unique approach to incentivizing local communities to actively participate in environmental monitoring and preservation efforts. By assigning tokens to specific trees and time slots, The Forest Friends creates a decentralized system that rewards individuals for contributing valuable data on forest biodiversity while promoting sustainable forest management practices.
          </p>
          <p className="lead m-4">
          Comprehensive Database:The development of a comprehensive database detailing the distribution of commercially valuable species within registered areas is another innovative aspect of The Forest Friends' technology solutions. By leveraging advanced data collection techniques and machine learning algorithms, this database provides valuable insights for prioritizing investments in sustainable businesses and supporting informed decision-making in environmental conservation.
          </p>

          <a href="/" className="justify-content-center" style={{textDecoration: "none"}}>
              <h1 className="fw-bold text-light d-flex align-items-center">
                <img src="/capmac.svg" width="200" className="me-3"/>
              </h1>
            </a>


          <h2 className="lead m-4 fw-bold">
          Advantages and Differentiation
          </h2>
          <p className="lead m-4"> 
          Innovative Technology Solutions: The integration of blockchain technology, tokenization of trees, and comprehensive data analysis sets The Forest Friends apart from traditional conservation organizations. These innovative solutions not only enhance transparency and accountability but also incentivize local communities to actively participate in environmental monitoring and preservation efforts.
          </p>
          <p className="lead ms-4"> 
          Community Empowerment: Unlike many conservation initiatives that adopt a top-down approach, The Forest Friends prioritizes community empowerment and engagement. By involving local communities in decision-making processes and recognizing their role as stewards of their natural resources, the company fosters ownership and long-term sustainability of conservation efforts.
          </p>
          <p className="lead m-4">
          Transparency and Trust: Through its use of blockchain technology, The Forest Friends ensures transparency and trust in the data exchanged between stakeholders. This not only builds confidence in the integrity of conservation efforts but also enables informed decision-making and accountability at all levels.
          </p>
 

        </div>
        <div className="p-4 mx-5">

        </div>

        <Footer/>

      </div>

    </> 
  );
}