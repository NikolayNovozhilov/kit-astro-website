# Harvested images from kit-learning.com

Downloaded from the live Tilda site on 2026-07-16 at full resolution (originals from
`static.tildacdn.one`, not the site's resized thumbnails). Filenames are inferred from
where each image sits on the page — rename / prune freely before the site is built.

Images live under `src/assets/images/` (Astro's convention for images you `import` and let
Astro optimize at build time). Folders group them by page section.

| File | Section on kit-learning.com | Notes |
|------|-----------------------------|-------|
| `branding/logo_kit_learning.png` | Header | Main "KIT LEARNING Singapore" logo |
| `branding/hero_banner.jpeg` | Header (2nd bar) | Secondary brand image (orig. `WhatsApp_Image_2025-.jpeg`) |
| `promos/promo_mandarin_class.png` | Top promo slider | orig. `Mandarin.png` |
| `promos/promo_may.jpg` | Top promo slider | orig. `May.jpg` |
| `promos/promo_special_offer.jpg` | Top promo slider | Early-booking "+20%" offer (orig. `Beige__White_Special.jpg`) |
| `promos/promo_summer_camp.png` | Top promo slider | orig. `Beige_and_Colorful_C.png` |
| `icons/icon_teaching.png` | Stats strip | Small stat icon |
| `icons/icon_graduation_cap.png` | Stats strip | Small stat icon |
| `icons/icon_brainstorming.png` | Stats strip | Small stat icon |
| `icons/icon_planet_earth.png` | Stats strip | Small stat icon |
| `gallery/summer_camp_kids_1.jpeg` | "Летний кемп" gallery | orig. `Kit_Kids_3-1-_4_.jpeg` |
| `gallery/summer_camp_kids_2.jpeg` | "Летний кемп" gallery | orig. `Kit_Kids_3-1-_2_.jpeg` |
| `gallery/summer_camp_kids_3.jpg` | "Летний кемп" gallery | orig. `Kit_Kids_3_1_5.jpg` |
| `programs/program_weekend_school.jpg` | Programs | Субботняя и Воскресная Школа |
| `programs/program_general_school_grades_1_12.jpeg` | Programs | Общеобразовательная школа 1-12 классы |
| `programs/program_bilingual_playcamp.jpg` | Programs | Билингвальный плейкэмп |
| `programs/program_art_class.jpg` | Programs | Арт-класс "Художка" |
| `programs/program_speech_therapy.jpg` | Programs | Развитие речи / Логопед / Нейрогимнастика |
| `programs/program_russian_language_grades_1_5.jpg` | Programs | 1-5 классы русский язык и литература |
| `programs/program_chess_class.jpg` | Programs | Шахматы |
| `programs/program_playcamp_znaika_10_36_months.jpg` | Programs | Плейкемп. Знайка-развивайка 10-36 мес |
| `programs/program_playcamp_wunderkind_3_5.jpg` | Programs | Плейкемп. Вундеркиндики 3-5 лет |
| `programs/program_parent_child_class.jpg` | Programs | Папа, Мама, Я |
| `programs/program_polyglot_5_6.jpeg` | Programs | Плейкемп. Полиглот 5-6 лет |
| `programs/program_cooking_class.jpg` | Programs | Кулинария |
| `teachers/teacher_yana_belskaya.jpeg` | Преподаватели | Яна Бельская — логопед-дефектолог |
| `teachers/teacher_anastasia_artemova.jpg` | Преподаватели | Анастасия Артемова — математика, химия |
| `teachers/teacher_aleksandra_novikova.png` | Преподаватели | Александра Новикова |
| `teachers/teacher_ekaterina_kudryavtseva.jpg` | Преподаватели | Кудрявцева Екатерина |
| `teachers/teacher_olga_belskaya.jpg` | Преподаватели | Ольга Бельская |
| `reviews/parent_review_1.png` | Отзывы родителей | Review screenshot |
| `reviews/parent_review_2.png` | Отзывы родителей | Review screenshot |
| `reviews/parent_review_3.png` | Отзывы родителей | Review screenshot |
| `reviews/parent_review_4.png` | Отзывы родителей | Review screenshot |
| `misc/about_our_project.jpg` | Feedback/contact section | orig. `our_project.jpg` |

## Not harvested

- **Instagram feed (7 photos):** the homepage embeds a live Instagram feed widget. Those
  images are served from `cdninstagram.com` via short-lived signed URLs and now return HTTP
  403, so they can't be downloaded directly. If you want them as static assets, save them
  from the school's Instagram or re-export from Tilda.

Teacher names were matched to photos by on-screen position (each name label lines up exactly
with its photo), but please verify the name↔face pairing when you review.
