// Quantités pour 4 personnes ; g, ml ou pièce. Huile, eau, sel et poivre sont supposés disponibles.
const recipes = [
['poulet-riz','Poulet, riz et brocolis','🍗',30,[['Poulet',500,'g'],['Riz',280,'g'],['Brocoli',500,'g']],'Cuire le riz et les brocolis. Découper le poulet et le faire revenir dans un peu d’huile jusqu’à cuisson complète. Servir ensemble.'],
['pates-bolo','Spaghetti bolognaise','🍝',35,[['Pâtes',400,'g'],['Bœuf haché',400,'g'],['Tomates concassées',400,'g'],['Oignon',1,'pièce'],['Carotte',2,'pièce']],'Faire revenir l’oignon et les carottes hachés. Ajouter le bœuf, puis les tomates. Laisser mijoter 20 min et servir sur les pâtes cuites.'],
['quiche','Quiche aux poireaux','🥧',45,[['Pâte brisée',1,'pièce'],['Poireau',3,'pièce'],['Œuf',3,'pièce'],['Crème',200,'ml'],['Fromage râpé',80,'g']],'Faire fondre les poireaux émincés. Mélanger œufs, crème et fromage. Garnir la pâte et cuire environ 30 min à 180 °C.'],
['saumon','Saumon et pommes de terre','🐟',35,[['Saumon',500,'g'],['Pomme de terre',800,'g'],['Haricots verts',400,'g'],['Citron',1,'pièce']],'Cuire les pommes de terre et les haricots. Cuire le saumon au four à 180 °C jusqu’à cuisson complète et assaisonner de citron.'],
['omelette','Omelette aux champignons','🍳',20,[['Œuf',8,'pièce'],['Champignon',300,'g'],['Pomme de terre',500,'g']],'Cuire les pommes de terre en dés. Faire revenir les champignons, ajouter les œufs battus et cuire l’omelette.'],
['curry','Curry de lentilles et carottes','🍛',30,[['Lentilles corail',250,'g'],['Carotte',4,'pièce'],['Lait de coco',400,'ml'],['Riz',240,'g'],['Curry',10,'g']],'Faire revenir les carottes en dés et le curry. Ajouter les lentilles, le lait de coco et un peu d’eau. Mijoter jusqu’à tendreté, servir avec le riz.'],
['gratin','Gratin de chou-fleur','🧀',45,[['Chou-fleur',1,'pièce'],['Lait',500,'ml'],['Farine',40,'g'],['Beurre',40,'g'],['Fromage râpé',100,'g'],['Pomme de terre',600,'g']],'Précuire les légumes. Préparer une béchamel avec beurre, farine et lait, puis verser sur les légumes. Ajouter le fromage et gratiner 20 min à 200 °C.'],
['soupe','Velouté de potimarron et tartines','🥣',35,[['Potimarron',1,'pièce'],['Pomme de terre',400,'g'],['Oignon',1,'pièce'],['Pain',250,'g'],['Fromage râpé',100,'g']],'Couper les légumes, couvrir d’eau et cuire jusqu’à tendreté. Mixer. Faire gratiner les tartines au fromage.'],
['riz-saute','Riz sauté aux œufs et légumes','🍚',25,[['Riz',280,'g'],['Œuf',4,'pièce'],['Carotte',3,'pièce'],['Petits pois',200,'g'],['Oignon',1,'pièce']],'Cuire le riz. Faire revenir les légumes, ajouter les œufs battus et mélanger avec le riz chaud.'],
['hachis','Hachis parmentier','🥔',50,[['Pomme de terre',900,'g'],['Bœuf haché',400,'g'],['Oignon',1,'pièce'],['Lait',150,'ml'],['Beurre',30,'g'],['Fromage râpé',60,'g']],'Préparer une purée. Faire revenir le bœuf avec l’oignon. Superposer viande et purée, ajouter le fromage et gratiner.'],
['cabillaud','Cabillaud, fondue de poireaux et riz','🐟',30,[['Cabillaud',500,'g'],['Poireau',3,'pièce'],['Crème',150,'ml'],['Riz',280,'g']],'Faire fondre les poireaux avec la crème. Cuire le riz et le poisson séparément. Servir chaud.'],
['pates-epinards','Pâtes aux épinards et ricotta','🍝',20,[['Pâtes',400,'g'],['Épinards',400,'g'],['Ricotta',250,'g'],['Oignon',1,'pièce']],'Cuire les pâtes. Faire revenir l’oignon et les épinards, ajouter la ricotta et mélanger avec les pâtes.'],
['poulet-four','Poulet rôti et légumes racines','🍗',55,[['Poulet',700,'g'],['Pomme de terre',700,'g'],['Carotte',4,'pièce'],['Oignon',2,'pièce']],'Disposer les morceaux de poulet et les légumes coupés dans un plat huilé. Cuire à 200 °C jusqu’à cuisson complète du poulet et des légumes.'],
['galettes','Galettes de sarrasin complètes','🥞',20,[['Galette de sarrasin',4,'pièce'],['Jambon',4,'pièce'],['Œuf',4,'pièce'],['Fromage râpé',100,'g'],['Salade',1,'pièce']],'Réchauffer chaque galette dans une poêle, ajouter jambon, œuf et fromage. Replier et servir avec la salade.'],
['lentilles','Salade tiède de lentilles et œufs','🥗',35,[['Lentilles vertes',280,'g'],['Carotte',3,'pièce'],['Œuf',4,'pièce'],['Oignon',1,'pièce']],'Cuire les lentilles et les carottes. Cuire les œufs durs. Mélanger avec l’oignon émincé et assaisonner.'],
['croque','Croque-monsieur et salade','🥪',20,[['Pain de mie',8,'pièce'],['Jambon',4,'pièce'],['Fromage râpé',150,'g'],['Salade',1,'pièce']],'Garnir le pain de jambon et de fromage. Faire dorer au four ou à la poêle. Servir avec la salade.'],
['dahl','Dahl de lentilles aux épinards','🍲',35,[['Lentilles corail',300,'g'],['Épinards',300,'g'],['Lait de coco',400,'ml'],['Oignon',1,'pièce'],['Curry',10,'g'],['Riz',200,'g']],'Faire revenir l’oignon et le curry. Ajouter les lentilles, le lait de coco et de l’eau. Mijoter puis incorporer les épinards. Servir avec le riz.'],
['courgette','Gratin de courgettes et riz','🥘',45,[['Courgette',4,'pièce'],['Riz',260,'g'],['Œuf',3,'pièce'],['Crème',200,'ml'],['Fromage râpé',100,'g']],'Cuire le riz et faire revenir les courgettes. Mélanger avec œufs et crème, ajouter le fromage puis gratiner.'],
['semoule','Semoule aux légumes et poulet','🍲',30,[['Semoule',280,'g'],['Poulet',400,'g'],['Carotte',3,'pièce'],['Courgette',2,'pièce'],['Oignon',1,'pièce']],'Faire revenir les légumes et le poulet jusqu’à cuisson complète. Préparer la semoule et servir avec les légumes.'],
['chili','Chili doux aux haricots rouges','🫘',35,[['Haricots rouges cuits',400,'g'],['Bœuf haché',300,'g'],['Tomates concassées',400,'g'],['Oignon',1,'pièce'],['Riz',240,'g']],'Faire revenir l’oignon et le bœuf. Ajouter les tomates et les haricots cuits. Mijoter 20 min et servir avec le riz.']
].map(([id,title,emoji,time,ingredients,steps])=>({id,title,emoji,time,ingredients,steps}));

// Bibliothèque de variantes combinatoires, sans API ni service externe.
// Chaque association contient une source de protéines, des légumes et un féculent.
const proteins = [
 ['Poulet','au poulet',500,'g','Faire revenir le poulet en petits morceaux jusqu’à cuisson complète (74 °C à cœur).'],
 ['Dinde','à la dinde',500,'g','Faire revenir la dinde en petits morceaux jusqu’à cuisson complète (74 °C à cœur).'],
 ['Bœuf haché','au bœuf',400,'g','Faire revenir le bœuf haché jusqu’à cuisson complète (71 °C à cœur).'],
 ['Porc','au porc',500,'g','Faire revenir les morceaux de porc jusqu’à cuisson complète.'],
 ['Saumon','au saumon',500,'g','Cuire le saumon séparément jusqu’à ce que la chair soit opaque et cuite à cœur, puis l’émietter.'],
 ['Cabillaud','au cabillaud',500,'g','Cuire le cabillaud séparément jusqu’à ce que la chair soit opaque et cuite à cœur, puis l’émietter.'],
 ['Œuf','aux œufs',6,'pièce','Cuire les œufs à part jusqu’à ce que blancs et jaunes soient pris.'],
 ['Tofu','au tofu',400,'g','Éponger et couper le tofu en dés, puis le faire dorer.'],
 ['Pois chiches cuits','aux pois chiches',500,'g','Rincer les pois chiches déjà cuits et les réchauffer à cœur.'],
 ['Lentilles vertes','aux lentilles',240,'g','Rincer les lentilles sèches et les cuire à l’eau jusqu’à tendreté.']
];
// Les mois correspondent à une saison indicative en France métropolitaine.
const vegetables = [
 ['Carotte',3,'pièce','Poireau',2,'pièce','carottes et poireaux',[1,2,3,4,9,10,11,12]],
 ['Brocoli',400,'g','Carotte',3,'pièce','brocolis et carottes',[6,7,8,9,10,11]],
 ['Courgette',3,'pièce','Tomate',3,'pièce','courgettes et tomates',[6,7,8,9]],
 ['Poivron',2,'pièce','Aubergine',2,'pièce','poivrons et aubergines',[7,8,9]],
 ['Champignon',300,'g','Épinards',300,'g','champignons et épinards',[3,4,5,9,10,11]],
 ['Chou-fleur',500,'g','Carotte',3,'pièce','chou-fleur et carottes',[1,2,3,4,10,11,12]],
 ['Haricots verts',400,'g','Tomate',3,'pièce','haricots verts et tomates',[6,7,8,9]],
 ['Poireau',3,'pièce','Champignon',300,'g','poireaux et champignons',[1,2,3,4,9,10,11,12]],
 ['Potimarron',1,'pièce','Oignon',2,'pièce','potimarron et oignons',[9,10,11,12,1]],
 ['Épinards',400,'g','Carotte',3,'pièce','épinards et carottes',[3,4,5,9,10,11]],
 ['Chou vert',500,'g','Carotte',3,'pièce','chou vert et carottes',[1,2,3,10,11,12]],
 ['Petits pois',300,'g','Carotte',3,'pièce','petits pois et carottes',[5,6,7]],
 ['Fenouil',2,'pièce','Tomate',3,'pièce','fenouil et tomates',[6,7,8,9]],
 ['Courgette',3,'pièce','Poivron',2,'pièce','courgettes et poivrons',[6,7,8,9]],
 ['Aubergine',2,'pièce','Tomate',3,'pièce','aubergines et tomates',[7,8,9]],
 ['Navet',400,'g','Poireau',2,'pièce','navets et poireaux',[1,2,3,4,10,11,12]],
 ['Panais',400,'g','Carotte',3,'pièce','panais et carottes',[1,2,3,10,11,12]],
 ['Brocoli',400,'g','Chou-fleur',400,'g','brocolis et chou-fleur',[9,10,11]],
 ['Blette',400,'g','Champignon',300,'g','blettes et champignons',[5,6,7,8,9,10]],
 ['Haricots verts',400,'g','Courgette',2,'pièce','haricots verts et courgettes',[6,7,8,9]]
];
const formats = [
 ['riz','Riz sauté','🍚',35,['Riz',280,'g'],[['Ail',2,'pièce']], 'Cuire le riz à l’eau selon le paquet. Préparer les protéines et les légumes séparément. Faire revenir l’ail émincé, ajouter le riz égoutté et mélanger avec les légumes et les protéines. Réchauffer le tout.'],
 ['pates','Pâtes crémeuses','🍝',35,['Pâtes',360,'g'],[['Crème',150,'ml']], 'Cuire les pâtes selon le paquet. Préparer les légumes et les protéines. Ajouter la crème aux légumes, laisser réduire quelques minutes, puis incorporer les pâtes égouttées et les protéines.'],
 ['semoule','Couscous doux','🍲',40,['Semoule',280,'g'],[['Cumin',4,'g']], 'Préparer la semoule selon le paquet. Cuire les légumes avec un peu d’eau et le cumin, préparer les protéines à part. Servir sur la semoule et ajouter un peu de jus de cuisson.'],
 ['quinoa','Bol de quinoa','🥗',35,['Quinoa',280,'g'],[['Citron',1,'pièce']], 'Rincer et cuire le quinoa selon le paquet. Préparer les légumes et les protéines. Répartir dans quatre bols, ajouter du jus de citron et un filet d’huile.'],
 ['pommes','Poêlée de pommes de terre','🥔',45,['Pomme de terre',800,'g'],[['Herbes de Provence',4,'g']], 'Couper les pommes de terre en dés et les précuire à l’eau environ 10 minutes. Égoutter et faire dorer à la poêle avec les herbes. Ajouter les légumes cuits et les protéines préparées.']
];
for (const [fi,f] of formats.entries()) for (const [pi,p] of proteins.entries()) for (const [vi,v] of vegetables.entries()) {
 const [format,title,emoji,time,base,extras,method]=f;
 const [protein,description,amount,unit,proteinMethod]=p;
 const [v1,a1,u1,v2,a2,u2,vegLabel,months]=v;
 const vegetableMethod='Laver, éplucher si nécessaire et couper les légumes en petits morceaux. Les cuire à la vapeur ou à la poêle avec un peu d’eau, jusqu’à tendreté (environ 10 à 25 minutes selon les légumes).';
 recipes.push({id:`var-${format}-${pi}-${vi}`,title:`${title} ${description}, ${vegLabel}`,emoji,time:time+(pi===9?10:0),ingredients:[[protein,amount,unit],[v1,a1,u1],[v2,a2,u2],base,...extras],steps:`${vegetableMethod} ${proteinMethod} ${method}`,months,category:pi<4?'Viande':pi<6?'Poisson':'Végétarien',variant:true});
}

// Recettes spécifiques aux pièces de viande, distinctes du bœuf haché.
const beefCuts = [
 ['cote-boeuf-rotie','Côte de bœuf rôtie, pommes de terre et haricots verts',50,[['Côte de bœuf',1000,'g'],['Pomme de terre',800,'g'],['Haricots verts',400,'g'],['Ail',2,'pièce']], 'Préchauffer le four à 200 °C. Couper les pommes de terre en quartiers, les huiler et les rôtir environ 35 à 45 min. Saisir la côte de bœuf sur les deux faces dans une poêle chaude, puis terminer au four selon son épaisseur, en contrôlant la température à cœur (au moins 63 °C, puis 3 min de repos). Cuire les haricots verts à la vapeur, servir avec l’ail et le jus de viande.'],
 ['cote-boeuf-poivre','Côte de bœuf, sauce au poivre et purée de pommes de terre',45,[['Côte de bœuf',1000,'g'],['Pomme de terre',800,'g'],['Crème',200,'ml'],['Lait',150,'ml'],['Beurre',30,'g']], 'Cuire les pommes de terre à l’eau, les écraser avec le lait et le beurre. Saisir la côte de bœuf puis terminer à feu modéré ou au four jusqu’à au moins 63 °C à cœur, laisser reposer 3 min. Déglacer la poêle avec un peu d’eau, ajouter crème et poivre, faire réduire.'],
 ['cote-boeuf-champignons','Côte de bœuf aux champignons et pommes de terre sautées',45,[['Côte de bœuf',1000,'g'],['Champignon',400,'g'],['Pomme de terre',800,'g'],['Oignon',1,'pièce'],['Beurre',30,'g']], 'Précuire les pommes de terre en dés puis les faire dorer. Faire revenir les champignons et l’oignon au beurre. Saisir la côte de bœuf puis terminer au four ou à la poêle jusqu’à au moins 63 °C à cœur. Laisser reposer 3 min avant de trancher.'],
 ['cote-boeuf-legumes','Côte de bœuf grillée et légumes rôtis',50,[['Côte de bœuf',1000,'g'],['Carotte',4,'pièce'],['Panais',400,'g'],['Pomme de terre',600,'g'],['Herbes de Provence',4,'g']], 'Couper les légumes et les pommes de terre, mélanger avec huile et herbes puis rôtir à 200 °C jusqu’à tendreté. Saisir la côte de bœuf au gril ou à la poêle et finir à chaleur modérée jusqu’à au moins 63 °C à cœur. Laisser reposer 3 min.'],
 ['cote-boeuf-beurre-ail','Côte de bœuf au beurre à l’ail',35,[['Côte de bœuf',1000,'g'],['Beurre',40,'g'],['Ail',2,'pièce']], 'Mélanger beurre et ail finement haché. Saisir la viande sur ses deux faces puis terminer la cuisson à feu modéré ou au four, jusqu’à au moins 63 °C à cœur. Laisser reposer au moins 3 min, déposer le beurre à l’ail sur la viande chaude. Ajouter un accompagnement de ton choix.'],
 ['entrecote-frites','Entrecôtes, pommes de terre au four et salade',40,[['Entrecôte',600,'g'],['Pomme de terre',800,'g'],['Salade',1,'pièce']], 'Tailler les pommes de terre en frites, huiler et cuire à 220 °C jusqu’à ce qu’elles soient dorées. Saisir les entrecôtes et cuire jusqu’à au moins 63 °C à cœur, puis laisser reposer 3 min. Servir avec la salade.'],
 ['bavette-echalotes','Bavette aux échalotes et purée',35,[['Bavette',600,'g'],['Échalote',3,'pièce'],['Pomme de terre',800,'g'],['Beurre',40,'g'],['Lait',150,'ml']], 'Cuire les pommes de terre et les écraser avec lait et beurre. Faire fondre les échalotes émincées. Saisir la bavette et cuire jusqu’à au moins 63 °C à cœur, laisser reposer 3 min puis trancher contre les fibres.'],
 ['roti-boeuf','Rôti de bœuf, carottes et pommes de terre',60,[['Rôti de bœuf',800,'g'],['Carotte',4,'pièce'],['Pomme de terre',800,'g'],['Oignon',1,'pièce']], 'Faire rôtir les légumes coupés avec de l’huile. Saisir le rôti et terminer au four à 180 °C jusqu’à au moins 63 °C à cœur, laisser reposer 3 min avant de trancher.'],
 ['bourguignon','Bœuf mijoté aux carottes et champignons',150,[['Bœuf à mijoter',700,'g'],['Carotte',4,'pièce'],['Champignon',300,'g'],['Oignon',2,'pièce'],['Pomme de terre',800,'g']], 'Faire dorer les cubes de bœuf puis les oignons. Ajouter les carottes, couvrir d’eau et laisser mijoter à couvert jusqu’à ce que la viande soit tendre. Ajouter les champignons en fin de cuisson. Servir avec les pommes de terre cuites à part.'],
 ['steak-haricots','Steaks de bœuf, haricots verts et pommes de terre',30,[['Steak de bœuf',600,'g'],['Haricots verts',400,'g'],['Pomme de terre',800,'g']], 'Cuire les pommes de terre et les haricots à la vapeur. Saisir les steaks puis terminer jusqu’à au moins 63 °C à cœur, laisser reposer 3 min.']
];
for (const [id,title,time,ingredients,steps] of beefCuts) recipes.push({id,title,time,ingredients,steps,emoji:'🥩',category:'Viande'});
