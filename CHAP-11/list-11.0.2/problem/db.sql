SQLite format 3   @                                                                     .f��  �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              �<�WtableusersusersCREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name text,
    email text UNIQUE,
    is_admin INTEGER DEFAULT 0 CHECK (is_admin IN (0, 1)),
    friends TEXT 
))= indexsqlite_autoindex_users_1users          
@ �k"��Q��@                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    E
 '?	?Piotr Adamskipiotr.adamski@example.comBogumił, Kazimierz, AnnaC	 /E-Marcin Zielińskimarcin.zielinski@example.comAdam, Ola, PiotrE %;EAnna Wójcikanna.wojcik@example.comSławomir, Leokadia, Żaneta< %=1Jan Kowalskijan.kowalski@example.comAdam, Jan, MalwinaE /G/Malwina Kowalczykmalwina.kowalczyk@example.comLeon, Basia, Anna< !9	9Adam Nowakadam.nowak@example.comStefan, Malwina, KasiaJ /E;Tomasz Kozłowskitomasz.kozlowski@example.comDobromił, Anna, KarinaG -E	7Marta Czajkowskamarta.czajkowska@example.comAlojzy, Józef, JuliaJ 3I3Alicja Szczepańskaalicja.szczepanska@example.comAnatol, Jerzy, AnnaG /G	3Kasia Lewandowskakasia.lewandowska@example.comAdam, Malwina, Anna
   
� _� �=���z                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ?piotr.adamski@example.com
 Emarcin.zielinski@example.com	;anna.wojcik@example.com=jan.kowalski@example.com!Gmalwina.kowalczyk@example.com9adam.nowak@example.com Etomasz.kozlowski@example.com Emarta.czajkowska@example.com"Ialicja.szczepanska@example.com G	kasia.lewandowska@example.com