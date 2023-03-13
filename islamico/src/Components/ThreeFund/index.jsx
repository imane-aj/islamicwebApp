import React, { Fragment, useState } from "react";
import Fund from '../../assets/3Fund.pdf'
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { ModalOpen } from "../../Redux/ToggleSlice";

const ThreeFund = () => {
  const [readmore, setReadmore] = useState(false);
  const modalOpen = useSelector((state)=>state.toggle.modalOpen)
  const dispatch = useDispatch()
  const close = () => dispatch(ModalOpen(false));
  const open = () => dispatch(ModalOpen(true));
  return (
    <Fragment>
      <div className="flex flex-col-reverse md:flex-row my-4 justify-center mt-10 md:gap-32">
        <div className=" md:mt-20 md:relative">
          <h2 className="img-title mb-5">The Three Fundamentals Book</h2>
          <p className="book-p-info mb-7">
            <a href="" className="text-custom-1">
              Muhammad bin Abdul Wahhab
            </a>
          </p>
          <ul className="book-table-info flex">
            <li className="mx-2 text-sm text-gray-400">
              <p>Pages</p>
              <p>
                <span className="numero">24</span>
              </p>
            </li>
            <li className="px-2 text-sm text-gray-400 border-l-2 border-gray-400">
              <p>Language</p>
              <p>English</p>
            </li>
            <li className="px-2 text-sm text-gray-400 border-l-2 border-gray-400">
              <p>Size</p>
              <p>
                {" "}
                MB <span className="numero">3.88</span>
              </p>
            </li>
            <li className="px-2 text-sm text-gray-400 border-l-2 border-gray-400">
              <p>File type</p>
              <p>PDF</p>
            </li>
          </ul>
          <div className="md:absolute md:bottom-3 my-10">
            <motion.button
              className="bg-custom-1 text-white px-5 py-2 mr-2 save-button"
              onClick={()=>(modalOpen?close():open())}>
             <i class="fa-solid fa-book-open"></i> Browse
            </motion.button>
            <a
              target="_blank"
              href={Fund} download='3Fund.pdf'
              className="bg-gray-800 text-white px-5 py-2"
            >
              <i class="fa-solid fa-download"></i> Download
            </a>
          </div>
        </div>
        <div>
          <img
            src={"/indexImg/threeFund.webp"}
            className="border rounded-md border-gray-300 p-1"
          />
        </div>
      </div>

      <div className="about-book mt-10">
        <h5 className="border-b border-gray-200 py-2">About the book</h5>
        <div className="py-2 text-sm">
          <p>
            "Three Fundamentals and Their Evidences" is a concise and valuable
            treatise authored by the Islamic scholar Muhammad bin Abdul Wahhab -
            may Allah have mercy upon him. It contains the fundamental
            principles that every human being is obligated to know, including
            knowledge of the servant's Lord, the types of worship that Allah has
            commanded, knowledge of the servant's religion, the levels of
            religion, the pillars of each level, knowledge of the Prophet -
            peace be upon him - in a summary of his life and the wisdom behind
            his mission, belief in the Resurrection and Judgment, and the two
            pillars of Tawheed, which are disbelieving in Taghut and believing
            in Allah. The book is divided into three sections ...
          </p>
          <button onClick={() => setReadmore(!readmore)} className={`${readmore? 'hidden' : 'block'} text-custom-1 py-2`}>
            Read more .... !!
          </button>
          {readmore ? (
            <Fragment>
              <div className="py-2">
                <h6 className="text-base text-light-blue-900 py-1">Section 1: Tawhid (Oneness of God)</h6>
                <p className="py-1">
                  The first section of the book is dedicated to the concept of
                  tawhid, which refers to the belief in the oneness of God. The
                  author emphasizes that this belief is the most important
                  aspect of Islam and is the foundation upon which all other
                  beliefs and actions must be based. The author explains that
                  tawhid includes four key components: belief in the oneness of
                  God in His Lordship, His Names and Attributes, His right to be
                  worshipped, and in His divine decree and predestination. The
                  author argues that any deviation from these four components of
                  tawhid is a form of shirk (associating partners with God) and
                  is therefore a grave sin. The Quran is replete with verses
                  that emphasize the belief in the oneness of God, or tawhid.
                  For example, the following verses from the Quran illustrate
                  this concept:  </p>
                  <ul className="italic">
                    <li><p>"Say, 'He is Allah, [who is] One, Allah, the
                  Eternal Refuge. He neither begets nor is born, nor is there to
                  Him any equivalent.'"<span className="text-custom-1">(Quran 112:1-4)</span></p></li>
                    <li><p>"And your god is one
                  God. There is no deity [worthy of worship] except Him, the
                  Most Merciful, the Especially Merciful."<span className="text-custom-1">(Quran 2:163)</span></p></li>
                    <li><p>"O
                  people, worship your Lord, who created you and those before
                  you, that you may become righteous."<span className="text-custom-1">(Quran 2:21)</span></p></li>
                  </ul>
                    <p>These verses
                  emphasize the belief in the oneness of God, which is the
                  foundation of Islam and the key to success in this life and
                  the afterlife.</p>
               
              </div>
              <div className="py-2">
                <h6 className="text-base text-light-blue-900 py-1">Section 2: Shirk (Associating partners with God)</h6>
                <p className="py-1">
                  The second section of the book focuses on the sin of shirk,
                  which refers to the belief in other gods besides Allah. The
                  author argues that shirk is the greatest sin in Islam and is
                  the only sin that Allah will not forgive if a person dies
                  while still holding this belief. The author provides examples
                  of different forms of shirk, including worship of idols and
                  saints, seeking help from anyone other than Allah, and making
                  vows to anyone other than Allah. The author emphasizes that
                  shirk is a serious offense that undermines the foundation of
                  Islam and must be avoided at all costs. The Quran also
                  contains numerous warnings against shirk, or the belief in
                  other gods besides Allah. For example, the following verses
                  emphasize the dangers of committing shirk:
                  <ul className="italic">
                    <li><p> "Indeed, Allah does
                  not forgive association with Him, but He forgives what is less
                  than that for whom He wills. And he who associates others with
                  Allah has certainly fabricated a tremendous sin."<span className="text-custom-1">(Quran 4:48)</span></p></li>
                    <li><p>"And whoever associates others with Allah has certainly
                  fabricated a great sin."<span className="text-custom-1">(Quran 31:13)</span></p></li>
                    <li><p>"And whoever invokes
                  besides Allah another deity for which he has no proof - then
                  his account is only with his Lord. Indeed, the disbelievers
                  will not succeed."<span className="text-custom-1">(Quran 23:117)</span></p></li>
                  </ul>
                    <p>These verses emphasize that
                  shirk is a grave sin that undermines the foundation of Islam
                  and must be avoided at all costs.</p>
                </p>
              </div>
              <div className="py-2">
                <h6 className="text-base text-light-blue-900 py-1">Section 3: The Consequences of Tawhid and Shirk</h6>
                <p className="py-1">
                  The third and final section of the book focuses on the
                  consequences of holding true to tawhid or committing shirk.
                  The author explains that those who hold fast to the belief in
                  tawhid and avoid shirk will be rewarded with paradise, while
                  those who reject tawhid and commit shirk will be punished in
                  hell. The author emphasizes that belief in tawhid is the key
                  to success in this life and in the afterlife, and that those
                  who reject tawhid will suffer eternal damnation. The Quran
                  also contains numerous references to the consequences of
                  holding true to tawhid or committing shirk. For example, the
                  following verses illustrate these concepts: 
                  <ul className="italic">
                    <li><p>"Indeed, those who
                  have believed and done righteous deeds - they will have the
                  Gardens of Paradise as a lodging, wherein they abide
                  eternally. It is the promise of Allah, [which is] truth, and
                  He is the Exalted in Might, the Wise."<span className="text-custom-1">(Quran 31:8-9)</span></p></li>
                    <li><p>"Indeed,
                  those who have believed and done righteous deeds - they will
                  have the Gardens of Paradise as a lodging. They will abide
                  therein eternally. They will not desire from it any transfer."<span className="text-custom-1">(Quran 18:107-108)</span></p></li>
                    <li><p>"And whoever associates others with Allah -
                  it is as though he had fallen from the sky and was snatched by
                  the birds or the wind carried him down into a remote place.
                  That is so. And whoever honors the symbols of Allah - indeed,
                  it is from the piety of hearts."<span className="text-custom-1">(Quran 22:31-32)</span></p></li>
                  </ul>
                    
                     <p>These verses
                  emphasize the importance of holding true to tawhid and
                  avoiding shirk, as the consequences of rejecting tawhid and
                  committing shirk are severe and eternal.</p>
                </p>
              </div>
            </Fragment>
          ) : (
            ""
          )}
            <button onClick={() => setReadmore(!readmore)} className={`${readmore? 'block' : 'hidden'} text-custom-1 py-2`}>
                Read less !!
            </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ThreeFund;
