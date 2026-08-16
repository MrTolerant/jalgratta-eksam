export type Language = 'et' | 'ru' | 'en';

export type CategoryId =
  | 'priority_give_way'       // 1. Teeandmise kohustus (hoovist, külgnevalt alalt, ristmikel)
  | 'road_position'           // 2. Sõiduki asukoht sõitmisel (asulas, asulavälisel teel, manöövritel)
  | 'turns'                   // 3. Vasak- ja tagasipööre
  | 'obstacle_avoidance'      // 4. Ümberpõige takistusest
  | 'intersections'           // 5. Sõitmine ristmikel (reguleeritud ja reguleerimata)
  | 'pedestrian_crossings'    // 6. Sõidutee ületamine ülekäiguraja kaudu
  | 'pedestrian_safety'       // 7. Juhi kohustused jalakäijate ohutuse tagamisel
  | 'bicycle_paths'           // 8. Sõitmine jalgrattateel ja jalgrattarajal
  | 'darkness_and_visibility' // 9. Sõitmine pimeda ajal ja halva nähtavuse tingimustes
  | 'safety_and_equipment'    // 10. Jalgratturi ohutus, varustus ja käitumine liikluses
  | 'hand_signals'            // 11. Käemärguanded
  | 'special_zones'           // 12. Õueala ja eritsoonid
  | 'passengers_cargo'        // 13. Sõitjad ja pagas
  | 'prohibitions'            // 14. Keelud
  | 'roundabouts_transit';    // 15. Ringristmikud ja ühistransport

export interface Category {
  id: CategoryId;
  order: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface QuestionOption {
  id: string;
  text: Record<Language, string>;
}

export type VisualType =
  | 'none'
  | 'sign'
  | 'svg_intersection'
  | 'svg_crossing'
  | 'svg_turning'
  | 'svg_bike_lane'
  | 'svg_equipment';

export interface VisualData {
  type: VisualType;
  signCode?: string;
  svgVariant?: string;
  signName?: Record<Language, string>;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  difficulty: 'easy' | 'medium' | 'hard';
  question: Record<Language, string>;
  options: QuestionOption[];
  correctAnswerId: string;
  explanation: Record<Language, string>;
  lawReference?: string;
  visual?: VisualData;
}

export interface ExamSession {
  id: string;
  startTime: number;
  endTime?: number;
  timeSpentSeconds: number;
  questionIds: string[];
  userAnswers: Record<string, string>; // questionId -> optionId
  isCompleted: boolean;
  score: number;
  passed: boolean;
  mode: 'exam' | 'practice' | 'mistakes' | 'marathon' | 'quick' | 'weak' | 'daily' | 'flagged';
  categoryId?: CategoryId;
}

export interface UserStats {
  totalExamsTaken: number;
  totalExamsPassed: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  mistakeQuestionIds: string[];
  savedQuestionIds: string[];
  categoryStats: Record<CategoryId, { answered: number; correct: number }>;
  history: {
    date: string;
    score: number;
    total: number;
    passed: boolean;
    mode: string;
  }[];
}

export interface TrafficSign {
  code: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  category: 'warning' | 'priority' | 'prohibitory' | 'mandatory' | 'informative';
  svgType: string;
}
