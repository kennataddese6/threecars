'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Car1 from '@/assets/Car1.webp';
import Car2 from '@/assets/Car2.webp';
import Car3 from '@/assets/Car3.webp';
import Car4 from '@/assets/Car4.webp';
import Car5 from '@/assets/Car5.webp';
import Car6 from '@/assets/Car6.webp';
import Car7 from '@/assets/Car7.webp';
import Car8 from '@/assets/Car8.webp';
import Car9 from '@/assets/Car9.webp';
import Car10 from '@/assets/Car10.webp';
import Car11 from '@/assets/Car11.webp';
import Light1 from '@/assets/light1.webp';
import Light2 from '@/assets/light2.webp';
import Light3 from '@/assets/light3.jpg';
import Light4 from '@/assets/light4.webp';
import Light5 from '@/assets/light5.webp';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Popup from '@/components/Popup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Paramter {
  id: number;
}
export default function BuildCarkit({ params }: { params: Paramter }) {
  const [choices, setChoices] = useState<number[]>([]);
  const [email, setEmail] = useState<String>('');
  const [popupView, setPopupView] = useState<Boolean>(false);
  const router = useRouter();

  const headerListItems = [
    {
      name: 'Home',
      active: false,
      des: '/',
    },
    {
      name: 'Make your own kit',
      active: true,
      des: '/kit',
    },
    {
      name: 'Parts for sale',
      active: false,
      des: '/',
    },
    {
      name: 'Our services',
      active: false,
      des: '/',
    },
  ];

  const carList = [
    {
      name: 'Lexus',
      image: Car1,
      gear: 'Automatic',
      date: 2019,
      gas: 'Petrol',
      color: 'Blue',
      miles: '240 Km/h',
      trending: true,
    },
    {
      name: 'RAM',
      image: Car2,
      gear: 'Manual',
      date: 2023,
      gas: 'Diesel',
      color: 'Red',
      miles: '320 Km/h',
      trending: false,
    },
    {
      name: 'Chevrolet',
      image: Car4,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Mazda',
      image: Car3,
      gear: 'Semiauto',
      date: 2024,
      gas: 'Gasoline',
      color: 'Grey',
      miles: '180 Km/h',
      trending: true,
    },
    {
      name: 'Honda',
      image: Car7,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Mini',
      image: Car5,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Subaru',
      image: Car6,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Jeep',
      image: Car8,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Audi',
      image: Car9,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Dodge',
      image: Car10,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
    {
      name: 'Volkswagen',
      image: Car11,
      gear: 'Automatic',
      date: 2024,
      gas: 'Petrol',
      color: 'Red',
      miles: '340 Km/h',
      trending: false,
    },
  ];
  const [kits, setKits] = useState([
    {
      title: 'Demon eyes',
      image: Light1,
      description:
        'Add RGB leds in your projectors to make those eyes look like evil.',
      added: false,
    },
    {
      title: 'Led Car strips',
      image: Light2,
      description:
        'Add RGB or White/Amber strip surround the edges to increase the style',
      added: false,
    },
    {
      title: 'Projector retrofit',
      image: Light3,
      description:
        'Add projectors to have more light output on nocturnal rides. Create a better style as well',
      added: false,
    },
    {
      title: 'Halos',
      image: Light4,
      description:
        'Add RGB, RGBW or White/Amber halos on the projectors shrouds to increase the style',
      added: false,
    },
    {
      title: 'Engraving lenses',
      image: Light5,
      description:
        'Custom made design or logo engraved in your projectors lenses',
      added: false,
    },
  ]);
  const handleAdd = (index: number) => {
    setChoices([...choices, index]);
    const updatedKits = [...kits];

    updatedKits[index] = {
      ...updatedKits[index],
      added: true,
    };

    setKits(updatedKits);
  };
  const handleMinus = (index: number) => {
    setChoices(choices.filter(choice => choice !== index));
    const updatedKits = [...kits];

    updatedKits[index] = {
      ...updatedKits[index],
      added: false,
    };

    setKits(updatedKits);
  };

  const handleOrder = () => {
    setPopupView(true);
  };
  const handleRequestOrder = () => {
    if (!email) {
      toast.error('Enter you email');
      return;
    }
    const list = `<ul> ${choices.map(
      choice => `<li>${kits[choice].title}</li>`,
    )}
      </ul>
    `;
    var templateParams = {
      title: 'You have an order',
      email: process.env.NEXT_PUBLIC_RECIEVER,
      description: `${email} has requested order for the following items for the car model ${
        carList[params.id].name
      }: ${list}`,
    };
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          'verfication_link',
          templateParams,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          },
        )
        .then(
          response => {
            toast.success('Your order is sent');
            setEmail('');
            setChoices([]);
          },
          error => {
            toast.error('Sending order failed');
          },
        );
    } else {
      toast.error('Inalid configuration');
    }
    setPopupView(false);
  };
  return (
    <>
      <ToastContainer theme="dark" />
      {popupView && (
        <Popup
          headerText="Request an order"
          setPopupView={setPopupView}
          descriptionText={`Requsting an order for ${choices.length} items`}
          setEmail={setEmail}
          callFunction={handleRequestOrder}
        />
      )}
      {/* Header */}
      <div className="headerContainer col-lg-12">
        <div className="headerSubContainer col-lg-11 col-xl-9">
          <div className="logoContainer col-lg-3">MT CUSTOM LIGHTS</div>
          <ul className="headerList col-lg-8 col-xl-6">
            {headerListItems.map((item, index) => (
              <li
                key={index}
                className={
                  item.active ? `headerItemActive headerItem` : ` headerItem`
                }
                onClick={() => router.push(item.des)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="rightheader col-xl-3">
            {/* <button className="signinbtn">Sign in</button> */}
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      <div className="contentContainer col-lg-11 col-xl-9">
        <div className="col-lg-8">
          <div className="carImagePreivewContainer">
            <Image
              src={carList[params.id].image}
              alt="car1"
              className="carpreivewbuildkit"
            ></Image>
          </div>
        </div>
        <div className="col-lg-4">
          {' '}
          <div className="addtokitcontainer">
            <input
              type="text"
              placeholder="Search"
              className="buildkitsearchbar"
            />
            {kits.map((kit, index) => (
              <div className="addKitsContainer" key={index}>
                <div className="addkitImagecontainer">
                  <Image
                    src={kit.image}
                    alt="Car1"
                    className="kitImage"
                  ></Image>
                </div>
                <div className="kitdescriptionContainer col-lg-8">
                  <h6 className="white-text" style={{ margin: '2px' }}>
                    {kit.title}
                  </h6>
                  <p className="kitdescription ">{kit.description}</p>
                </div>
                <div className="addkitcontainer col-lg-1">
                  {!kit.added ? (
                    <FaPlus
                      color="dodgerblue"
                      onClick={() => {
                        handleAdd(index);
                      }}
                    />
                  ) : (
                    <FaMinus
                      color="red"
                      onClick={() => {
                        handleMinus(index);
                      }}
                    />
                  )}{' '}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="choiceContainer col-lg-8">
          {choices.length ? (
            choices.map((choice, index) => (
              <div className="choiceItemContainer col-lg-3" key={index}>
                <Image
                  src={kits[choice].image}
                  alt="Car 1"
                  className="carpreivewbuildkit"
                ></Image>
              </div>
            ))
          ) : (
            <h6
              className="center-text selectionInfoText"
              style={{
                width: '100%',
                padding: '60px 0',
              }}
            >
              Nothing added yet!
            </h6>
          )}
          {choices.length ? (
            choices.length % 4 ? (
              <button
                className="btn btn-warning requestorderbutton"
                onClick={() => handleOrder()}
              >
                Request an order
              </button>
            ) : (
              <button
                className="btn btn-warning requestorderbutton"
                style={{ marginLeft: 'auto' }}
                onClick={() => handleOrder()}
              >
                Request an order
              </button>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
