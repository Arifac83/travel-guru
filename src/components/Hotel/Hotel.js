import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Room from "../Room/Room";
import Footer from "../Footer/Footer";
import map from "../../image/img/map.png";
import { Link } from "react-router-dom";
const Hotel = () => {
  const rooms = [
    {
      title: "Standard Single Room",
      description:
        "Standard Single Rooms are designed in open -concept living area and have many facilities.",
      imgUrl: "https://i.ibb.co/y4k1JM6/coxbazar3.png",
      bed: 1,
      capacity: 1,
      bedType: "Single",
      avatar: "S",
      price: 119,
    },
    {
      title: "Couple Power Room",
      description:
        "Superior Double Rooms are perfectly equipped for traveling couples or friends.",
      imgUrl: "https://i.ibb.co/Hd4tzGZ/coxbazar4.png",
      bed: 1,
      capacity: 2,
      bedType: "Double",
      avatar: "D",
      price: 149,
    },
    {
      title: "Family Capacity Room",
      description:
        " Have lots of in-room facilities and are designed in open-concept living area.",
      imgUrl: "https://i.ibb.co/XLTyDLq/coxsbazar2.png",
      bed: 2,
      capacity: 4,
      bedType: "Family",
      avatar: "F",
      price: 199,
    },
  ];
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h6> 252 stays Apr 13-17 3 guests</h6>
          <h4>Stay in Cox's Bazar</h4>
          {rooms.map((room) => (
            <Room key={room.bedType} room={room}></Room>
          ))}
        </Col>
        <Col >
          <h3>Long Beach Hotel</h3>
          <h6>14 Kalatoli, Hotel-Motel Zone, 4700 Cox's Bazar, Bangladesh </h6>
          <p>
            Offering an indoor pool, a fitness centre and a spa and wellness
            centre, Long Beach Hotel is located 3.3 km from the Cox's Bazar
            Airport and Local Bus Station. Free wired internet is available in
            the rooms of the property.
            <br />
            Each air-conditioned room here will provide you with a satellite TV,
            seating area and a balcony. There is also a minibar. Featuring a
            shower, private bathroom also comes with bathrobes and free
            toiletries. At Long Beach Hotel you will find a 24-hour front desk,
            BBQ facilities and garden. Other facilities offered at the property
            include meeting facilities, a shared lounge and a ticket service.
            The property offers free parking. The Barmiz Market Cox’s Bazar is 3
            km, the Himchari National Park is 8 km and the Binani Beach is 24 km
            away.
          </p>
          <h5>Extra health & safety measures</h5>
          <h6>Safety features</h6>
          <p>
            Staff follow all safety protocols as directed by local authorities
            Shared stationery such as printed menus, magazines, pens, and paper
            removed Hand sanitizer in guest accommodation and key areas Process
            in place to check health of guests First aid kit available Face
            masks for guests available.
          </p>
          <h5>Most popular facilities </h5>
          <h6>Cleanliness & disinfecting</h6>
          <p>
            Use of cleaning chemicals that are effective against Coronavirus
            Linens, towels and laundry washed in accordance with local authority
            guidelines Guest accommodation is disinfected between stays Guest
            accommodation sealed after cleaning Property is cleaned by
            professional cleaning companies Guests have the option to cancel any
            cleaning services for their accommodation during their stay
          </p>
          <h5>Food & drink safety</h5>
          <h6>Physical distancing </h6>
          <p>
            Physical distancing in dining areas Food can be delivered to guest
            accommodation All plates, cutlery, glasses and other tableware have
            been sanitized Breakfast takeaway containers Delivered food is
            securely covered
          </p>
        </Col>
        <Col>
         <Link to="https://console.cloud.google.com/apis/credentials?folder=&organizationId=&project=travel-guru-289818">Google Map or Location at Long Beach Hotel</Link>
         <img  src={map} alt=""/>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Hotel;
