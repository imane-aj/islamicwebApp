import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import menuItemsAr from '../../lang/ar.json'
import menuItemsEn from '../../lang/en.json'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const IslamHistory = ({t, i18n}) => {
  const dispatch = useDispatch()

  const islamicHcycle = (i18n.language === 'ar')
      ? menuItemsAr.islamicHcycle.map(({ id, title, desc }) => ({ id, title, desc }))
      : menuItemsEn.islamicHcycle.map(({ id, title, desc }) => ({ id, title, desc }));

  const islamicHEss = (i18n.language === 'ar')
    ? menuItemsAr.islamicHEss.map(({ id, title, desc, include, img }) => ({ id, title, desc, include, img }))
    : menuItemsEn.islamicHEss.map(({ id, title, desc, include, img }) => ({ id, title, desc, include, img }));

  return (
    <Fragment>
      <div>
        <p>{t('islamicHintro')}</p><br />
        {islamicHcycle.map((item, idx)=>(
          <Fragment key={idx}>
            <p><span className='span text-custom-1 relative ml-4'></span>{item.title}</p>
            <p>{item.desc}</p><br />
          </Fragment>
        ))}
      </div>
      <div className='flex flex-col md:flex-row md:justify-between my-6'>
      {islamicHEss.map((item, idx)=>(
        <div className='p-3 md:mr-3 md:mb-0 mb-3 md:w-[%70]' key={idx}>
          <figure className='border rounded-md border-gray-300 p-2'>
            <LazyLoadImage src={`/indexImg/${item.img}`}
                alt="Elephant at sunset" loading="lazy"/>
            <figcaption className='text-xs text-gray-200'>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <ul className='italic text-start'>
                {item.include.map((item, idx)=>(
                  <li key={idx}>{item}</li>
                ))}
                </ul>
            </figcaption>
          </figure>
        </div>
      ))}
      </div>
      {t('islamicHConclus')}
    </Fragment>
  )
}
