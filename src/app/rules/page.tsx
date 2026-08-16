'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Users, Shield, Bike } from 'lucide-react';

export default function RulesPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
          <span>{lang === 'et' ? 'Jalgratturi Meelespea ja Reeglid' : lang === 'ru' ? 'Памятка велосипедиста и ПДД Эстонии' : 'Estonian Cyclist Rules & Cheat Sheet'}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {lang === 'et'
            ? 'Kõige olulisemad punktid Eesti Liiklusseadusest (LS), mida kontrollitakse teooriaeksamil.'
            : lang === 'ru'
            ? 'Ключевые пункты Закона о дорожном движении Эстонии (Liiklusseadus), проверяемые на экзамене.'
            : 'Key provisions of the Estonian Traffic Act tested during the official cyclist examination.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
            10+
          </div>
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">
            {lang === 'et' ? 'Vanus ja juhiluba' : lang === 'ru' ? 'Возраст и водительские права' : 'Age & License'}
          </h2>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
            <li>
              {lang === 'et'
                ? 'Sõiduteel tohib iseseisvalt sõita vähemalt 10-aastane isik.'
                : lang === 'ru'
                ? 'Самостоятельно по проезжей части разрешено ехать с 10 лет.'
                : 'Solo riding on roadways is allowed from 10 years of age.'}
            </li>
            <li>
              {lang === 'et'
                ? '10–15-aastasel ratturil peab sõiduteel sõites kaasas olema jalgratturi juhiluba.'
                : lang === 'ru'
                ? 'Велосипедисты 10–15 лет на проезжей части обязаны иметь при себе права.'
                : 'Cyclists aged 10–15 must carry a cyclist driver license on roadways.'}
            </li>
            <li>
              {lang === 'et'
                ? 'Alates 16. eluaastast jalgratta juhtimiseks juhiluba ei nõuta.'
                : lang === 'ru'
                ? 'С 16 лет водительские права для езды на велосипеде не требуются.'
                : 'From age 16, no license is required for cycling.'}
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">
            {lang === 'et' ? 'Jalgratturikiiver' : lang === 'ru' ? 'Велосипедный шлем' : 'Bicycle Helmet'}
          </h2>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
            <li>
              {lang === 'et'
                ? 'Kõigile alla 16-aastastele jalgratturitele on kiivri kandmine ja kinnitamine KOHUSTUSLIK teel sõites.'
                : lang === 'ru'
                ? 'Для всех лиц младше 16 лет ношение застёгнутого шлема ОБЯЗАТЕЛЬНО при езде по любой дороге.'
                : 'Wearing a securely fastened helmet is MANDATORY for all cyclists under 16 years of age.'}
            </li>
            <li>
              {lang === 'et'
                ? 'Täiskasvanutele on kiiver tungivalt soovituslik turvalisuse tagamiseks.'
                : lang === 'ru'
                ? 'Для взрослых шлем настоятельно рекомендуется ради безопасности.'
                : 'Strongly recommended for adults for personal injury prevention.'}
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">
            {lang === 'et' ? 'Ülekäigurada (sebra)' : lang === 'ru' ? 'Пешеходный переход (зебра)' : 'Crosswalks (Zebras)'}
          </h2>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
            <li>
              {lang === 'et'
                ? 'Jalgrattaga TOHIB ületada teed sebral sellel sõites jalakäija kiirusega.'
                : lang === 'ru'
                ? 'Переезжать по зебре верхом на велосипеде РАЗРЕШЕНО со скоростью шага пешехода.'
                : 'Riding across a crosswalk on bike is PERMITTED at normal walking speed.'}
            </li>
            <li>
              {lang === 'et'
                ? 'HOIATUS: Reguleerimata ülekäigurajal sõites EI OLE jalgratturil autojuhi ees eesõigust (autod ei pea teed andma), v.a kui auto sooritab pööret.'
                : lang === 'ru'
                ? 'ВНИМАНИЕ: На нерегулируемом переходе у велосипедиста НЕТ преимущества перед машинами (авто не обязаны уступать), кроме случая поворота авто.'
                : 'WARNING: On uncontrolled crosswalks, cycling gives NO right-of-way over straight-moving cars unless the car is making a turn.'}
            </li>
            <li>
              {lang === 'et'
                ? 'Ratast käekõrval lükates muutud jalakäijaks ja saad täieliku eesõiguse!'
                : lang === 'ru'
                ? 'Спешившись и ведя велосипед рядом, ты становишься пешеходом с полным преимуществом!'
                : 'Dismounting and walking your bicycle makes you a pedestrian with full right-of-way.'}
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Bike className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">
            {lang === 'et' ? 'Kohustuslik varustus' : lang === 'ru' ? 'Обязательное оснащение' : 'Mandatory Equipment'}
          </h2>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
            <li>
              {lang === 'et'
                ? 'Töökorras pidurid ja signaalkell.'
                : lang === 'ru'
                ? 'Исправная тормозная система и звонок.'
                : 'Operational brakes and a working bell.'}
            </li>
            <li>
              {lang === 'et'
                ? 'Helkurid: ees valge, taga punane, külgedel (ratastel) kollased või valged.'
                : lang === 'ru'
                ? 'Отражатели: спереди белый, сзади красный, на колёсах жёлтые или белые.'
                : 'Reflectors: white front, red rear, yellow or white wheel side reflectors.'}
            </li>
            <li>
              {lang === 'et'
                ? 'Pimedas ja halva nähtavusega: ees valge põlev tuli, taga punane põlev tuli.'
                : lang === 'ru'
                ? 'В темноте и сумерках: спереди горящий белый фонарь, сзади красный фонарь.'
                : 'In darkness/fog: working white front lamp and red rear lamp.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
