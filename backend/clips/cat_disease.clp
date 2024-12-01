(deffacts cat-diseases
   (disease (name "Feline Immunodeficiency Virus (FIV)"
                  (symptoms "Weight loss, dental disease, recurrent infections, fever, swollen lymph nodes")
                  (description "FIV is a viral disease that attacks a cat's immune system, similar to HIV in humans. Infected cats may appear healthy for years but can develop severe health issues over time.")
                  (treatment "There is no cure, but supportive care and management of secondary infections are essential. Regular veterinary check-ups are crucial."))

   (disease (name "Feline Leukemia Virus (FeLV)"
                  (symptoms "Lethargy, weight loss, fever, swollen lymph nodes, pale gums")
                  (description "FeLV is a viral infection that severely suppresses the immune system, making cats more susceptible to other infections and diseases, including cancer.")
                  (treatment "There is no specific treatment to eliminate the virus. Supportive care can help manage symptoms, and vaccination is recommended to prevent infection."))

   (disease (name "Feline Infectious Peritonitis (FIP)"
                  (symptoms "Fever, weight loss, lethargy, fluid accumulation in the abdomen or chest, neurological signs")
                  (description "FIP is caused by a mutation of the feline coronavirus and leads to severe inflammation in the body. It is often fatal.")
                  (treatment "There is no definitive cure, but antiviral medications have shown promise in some cases. Supportive care is essential."))

   (disease (name "Stomatitis"
                  (symptoms "Inflammation of the gums, bad breath, difficulty eating, excessive drooling")
                  (description "Stomatitis is a painful condition affecting the mouth and gums, often associated with dental disease or viral infections like FIV.")
                  (treatment "Treatment may include dental cleanings, anti-inflammatory medications, and in severe cases, tooth extractions."))

   (disease (name "Inflammatory Bowel Disease (IBD)"
                  (symptoms "Vomiting, diarrhea, weight loss, decreased appetite")
                  (description "IBD is a chronic condition characterized by inflammation of the gastrointestinal tract, leading to digestive issues.")
                  (treatment "Management often includes dietary changes, anti-inflammatory medications, and sometimes immunosuppressive drugs."))

   (disease (name "Heartworm Disease"
                  (symptoms "Coughing, lethargy, weight loss, difficulty breathing")
                  (description "Heartworm is caused by parasitic worms that live in the heart and blood vessels, leading to serious health issues.")
                  (treatment "Preventative medications are key; treatment is complex and can have risks, including potential complications from dying worms."))

   (disease (name "Flea Infestation"
                  (symptoms "Itching, hair loss, skin irritation, flea dirt (black specks) on the skin")
                  (description "Fleas are external parasites that feed on a cat's blood, causing discomfort and potential allergic reactions.")
                  (treatment "Effective flea control includes topical treatments, oral medications, and environmental management to eliminate fleas from the home."))
)

(defrule disease-info
   ?d <- (disease (name ?name)
                  (symptoms ?symptoms)
                  (description ?description)
                  (treatment ?treatment))
   =>
   (printout t "Disease Name: " ?name crlf)
   (printout t "Symptoms: " ?symptoms crlf)
   (printout t "Description: " ?description crlf)
   (printout t "Treatment: " ?treatment crlf)
   (printout t "-----------------------------------" crlf)
)

(reset)
(run)