import './Feature.css';
import imgOne from '../../assets/images/delivery.png'
import imgTwo from '../../assets/images/dining.png'
import imgThree from '../../assets/images/pickup.png'


const Feature = () => {
  const data = [
    {
      icon:imgOne,
      title: "FAST DELIVERY",
      text: "Within 30 minutes"
    },
    {
      icon:imgTwo,
      title: "absolute dining",
      text: "Best buffet restaurant"
    },
    {
      icon:imgThree,
      title: "pickup delivery",
      text: "Grab your food order"
    }
    
  ]
  return (
    <section className='feature-section'>
      <div className="container">
        <div className="row">
          {
            data.map( (item, index)=>{
              return(
                <div key={index} className="col-md-4">
                  <div className="feature-card">
                    <div className="icon-box">
                      <img src={item.icon} alt="icon" />
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </section>
  );
};

export default Feature;