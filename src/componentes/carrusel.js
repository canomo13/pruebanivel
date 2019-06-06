import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/luke.jpg" style={width:150, height:'auto'} />
      <p className="legend">Luke Skywalker</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/han-solo.jpg" style={width:150, height:'auto'} />
      <p className="legend">Han Solo</p>
    </div>
    <div>
      <img src="http://bensbargains.net/thecheckout/wp-content/uploads/2013/07/chewbacca.jpg" style={width:150, height:'auto'} />
      <p className="legend">Chewbacca</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/c3po.jpg" style={width:150, height:'auto'} />
      <p className="legend">C3PO</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/leia.jpg" style={width:150, height:'auto'} />
      <p className="legend">Leia Organa</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/r2t2.jpg" style={width:150, height:'auto'}/>
      <p className="legend">R2-d2</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/yoda.jpg" style={width:150, height:'auto'}/>
      <p className="legend">Yoda</p>
    </div>
    <div>
      <img src="https://bensbargains.net/thecheckout/wp-content/uploads/2013/07/darth-vader.jpg" style={width:150, height:'auto'} />
      <p className="legend">Darth Vader</p>
    </div>

  </Carousel>
);