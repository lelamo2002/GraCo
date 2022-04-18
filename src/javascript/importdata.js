// read local file as an array


const data = [{ 'matricula': '190091681', 'curso': 'Engenharia de Software', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '202028973', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211039617', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031495', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211031870', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211041240', 'curso': 'Engenheira de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211029343', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031646', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211052323', 'curso': 'Agronomia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 1, 'pior_modelo': 'hibrido' }, { 'matricula': '211039930', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211017413', 'curso': 'psicologia ', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211017511', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211029334', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211045157', 'curso': 'Psicolog�\xada', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062624', 'curso': 'Engenharia Aeroespacial', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211068225', 'curso': 'Engenharia de computação ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211043683', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211039840', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '180119419', 'curso': 'Engenharia de Energia', 'semestre': '7', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'presencial' }, { 'matricula': '211045928', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068360', 'curso': 'Engenharia da computação ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211026109', 'curso': 'Engenharia ambiental  ', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202045446', 'curso': 'Engenharias', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211039887', 'curso': 'psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211030676', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211039420', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048376', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212007369', 'curso': 'Eng. de Computaçãõ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048518', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048625', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212007046', 'curso': 'Engenharia de Computação ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212006737', 'curso': 'Engenharia de computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '212006871', 'curso': 'Engenharia da Computação ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212008375', 'curso': 'Engenharia de Computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062160', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202017129', 'curso': 'Engenharias ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '200014447', 'curso': 'Eng software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048474', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068459', 'curso': 'Engenharia da computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068403', 'curso': 'Engenharia da computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211048447', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048367', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211061340', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211044822', 'curso': 'Engenharia automotiva ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211068510', 'curso': 'Engenharia de computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211048394', 'curso': 'psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202015858', 'curso': 'Engenharia de software ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211039949', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211030872', 'curso': 'Engenharia ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048492', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '211062393', 'curso': 'Engenharia', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '200044264', 'curso': 'Engenharia automotiva', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031637', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 0, 'pior_modelo': 'online' }, { 'matricula': '211041150', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031083', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202017503', 'curso': 'Engenharia de software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202068351', 'curso': 'Psicologia ', 'semestre': '7', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '200024787', 'curso': 'Engenharia de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211062894', 'curso': 'Engenharia', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211061841', 'curso': 'Engenharia', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202045428', 'curso': 'Engenharia FGA', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048741', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211041221', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211030255', 'curso': 'Engenharia Aeroespacial ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '202062670', 'curso': 'Psicologia', 'semestre': '3', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211031619', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '202063542', 'curso': 'Engenharia eletrônica ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211039250', 'curso': 'Engenharia', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211029657', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211029218', 'curso': 'Engenharia Aeroespacial', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202016720', 'curso': 'Eng. De software ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 1, 'pior_modelo': 'presencial' }, { 'matricula': '211029325', 'curso': 'Engenharia', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031790', 'curso': 'Engenharia', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '211031109', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068430', 'curso': 'Engenharia da computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202023841', 'curso': 'Engenharia de software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211031771', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202016444', 'curso': 'Engenharia Automotiva', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '21106158', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031575', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211052299', 'curso': 'Agronomia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211052252', 'curso': 'Agronomia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211068305', 'curso': 'Eng. De computaçao', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211051961', 'curso': 'Agronomia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211029156', 'curso': 'Engenharias Gama', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211048400', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '212005417', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211052127', 'curso': 'Agronomia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211052056', 'curso': 'Agronomia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062778', 'curso': 'Engenharias ', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048483', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062820', 'curso': 'Engenharia eletrônica', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211030620', 'curso': 'Engenharia de software ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211030596', 'curso': 'Engenharia ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211039690', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211039439', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211051881', 'curso': 'Agronomia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211039760', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202017325', 'curso': 'Engenharia aeroespacial', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211039608', 'curso': 'Engenharia Aeroespacial', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211052190', 'curso': 'Agronomia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049720', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049909', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211049800', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049604', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211063256', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049927', 'curso': 'medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062938', 'curso': 'Engenharia ', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049640', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211049711', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211049892', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049678', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '200035371', 'curso': 'Engenharia de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 1, 'pior_modelo': 'hibrido' }, { 'matricula': '211039279', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211043610', 'curso': 'Engenharia (de Software)', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211062016', 'curso': 'Engenharia ', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 1, 'pior_modelo': 'online' }, { 'matricula': '211017360', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '211061930', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211031628', 'curso': 'Engenharias', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049650', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190047917', 'curso': 'Engenharia Aeroespacial', 'semestre': '6', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211041043', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202045160', 'curso': 'Engenharia Aeroespacial', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 1, 'pior_modelo': 'presencial' }, { 'matricula': '211048563', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190124997', 'curso': 'Engenharia de Software', 'semestre': '5', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211049570', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068350', 'curso': 'Engenharia da Computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211039475', 'curso': 'Engenharia Aeroespacial', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211029648', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211062099', 'curso': 'Engenharias ', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212007841', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211030602', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211049954', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '160037522', 'curso': 'Engenharia de Software', 'semestre': '9', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '211039896', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211049856', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211029414', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'presencial' }, { 'matricula': '190038926', 'curso': 'Engenharia de Software', 'semestre': '6', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 1, 'pior_modelo': 'hibrido' }, { 'matricula': '202045203', 'curso': 'Engenharia Aeroespacial ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048278', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211068252', 'curso': 'Engenharia de Computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '202054347', 'curso': 'Nutrição', 'semestre': '3', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190106565', 'curso': 'Engenharia de Software', 'semestre': '7', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211049669', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '180129147', 'curso': 'Engenharia de Software', 'semestre': '7', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '211048616', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048287', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211017370', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211062007', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049918', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048527', 'curso': 'Psicologia', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '200025791', 'curso': 'Engengsria de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190025379', 'curso': 'Engenharia de Software', 'semestre': '6', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'presencial' }, { 'matricula': '180114093', 'curso': 'Engenharia de Software', 'semestre': '7', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '180037242', 'curso': 'Engenharia de Software', 'semestre': '8', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '202023743', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211068440', 'curso': 'Engenharia da Computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063630', 'curso': 'Medicina veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063560', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '200059181', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211063499', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211063381', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063274', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212006586', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211019534', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063550', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063588', 'curso': 'Medicina Veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212005918', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211029488', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211048670', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211016274', 'curso': 'Ciências Sociais ', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '160149410', 'curso': 'Engenharia de Software', 'semestre': '5', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '211030747', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063390', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '160124581', 'curso': 'Engenharia de Software', 'semestre': '8', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '180105345', 'curso': 'engenharia de software', 'semestre': '7', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 1, 'pior_modelo': 'hibrido' }, { 'matricula': '170102343', 'curso': 'Engenharia de Software', 'semestre': '9', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '160144949', 'curso': 'Engenharia de Software', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '170013987', 'curso': 'Engenharia de software ', 'semestre': '8', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211063372', 'curso': 'Medicina Veterinária ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211049954', 'curso': 'Medicina ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211049730', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190108011', 'curso': 'Engenharia de Software', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211031056', 'curso': 'Engenharia', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049560', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211017585', 'curso': 'Psicologia', 'semestre': '2', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211049613', 'curso': 'Medicina', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '190116633', 'curso': 'Engenharia Qu�\xadmica', 'semestre': '5', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211031459', 'curso': 'Engenharia de Software ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190013974', 'curso': 'Engenharia Qu�\xadmica', 'semestre': '6', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190129000', 'curso': 'Engenharia Qu�\xadmica', 'semestre': '5', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '202016364', 'curso': 'Engenharias', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211030961', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211062230', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '200035703', 'curso': 'Engenharia de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211067970', 'curso': 'Enfermagem ', 'semestre': '1', 'campus': 'FCE', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211061690', 'curso': 'Engenharias', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '200073249', 'curso': 'Engenharia de Software ', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '212007153', 'curso': 'Engenharia de computação', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '211048705', 'curso': 'Psicologia ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '19092718', 'curso': 'Engenharia de Energia ', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202017700', 'curso': 'Engenharia de Software ', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }, { 'matricula': '190092408', 'curso': 'Eletrônica', 'semestre': '5', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '190087048', 'curso': 'Engenharia de Software ', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '190088125', 'curso': 'Administração ', 'semestre': '5', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202063462', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211004166', 'curso': 'Engenharia eletrônica', 'semestre': '2', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '211031851', 'curso': 'Engenharias ', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '202016847', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '200024825', 'curso': 'Engenharia de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190092157', 'curso': 'Fonoaudiologia', 'semestre': '4', 'campus': 'FCE', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190090235', 'curso': 'Fonoaudiologia', 'semestre': '4', 'campus': 'FCE', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '180137841', 'curso': 'Biblioteconomia ', 'semestre': '7', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202015984', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '180114751', 'curso': 'Engenharia de Software ', 'semestre': '6', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'hibrido' }, { 'matricula': '190089792', 'curso': 'Engenharia de Software ', 'semestre': '5', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202023663', 'curso': 'Engenharia de software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '190117591', 'curso': 'Engenharia Aeroespacial', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202023860', 'curso': 'Engenharia de Software', 'semestre': '3', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190094320', 'curso': 'Engenharia de Software', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211063612', 'curso': 'Medicina veterinária', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190086866', 'curso': 'Fonoaudiologia', 'semestre': '5', 'campus': 'FCE', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190139285', 'curso': 'Engenharia Automotiva', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '200016059', 'curso': 'Engenharia Aeroespacial', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202024240', 'curso': 'Educação f�\xadsica- Bacharelado ', 'semestre': '3', 'campus': 'DARCY', 'confianca': 'nao', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '190139048', 'curso': 'Engenharia de Software ', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '17/0062562', 'curso': 'Engenharia de Energia', 'semestre': '1', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '202050867', 'curso': 'História ', 'semestre': '3', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '19/0039949', 'curso': 'Geof�\xadsica', 'semestre': '6', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190012757', 'curso': 'Engenharia Eletrônica', 'semestre': '6', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '200058576', 'curso': 'Engenharia de Software', 'semestre': '4', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190085509', 'curso': 'Fonoaudiologia', 'semestre': '4', 'campus': 'FCE', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190059281', 'curso': 'Engenharia aeroespacial', 'semestre': '6', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '190038161', 'curso': 'Terapia Ocupacional ', 'semestre': '6', 'campus': 'FCE', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '150153406', 'curso': 'Engenharia de produção ', 'semestre': '1', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '17/0148971', 'curso': 'Farmácia', 'semestre': '9', 'campus': 'FCE', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '190091371', 'curso': 'L�\xadnguas Estrangeiras Aplicadas ', 'semestre': '5', 'campus': 'DARCY', 'confianca': 'sim', 'vacinacao': 3, 'pior_modelo': 'online' }, { 'matricula': '190091444', 'curso': 'Engenharia de Software ', 'semestre': '5', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 1, 'pior_modelo': 'online' }, { 'matricula': '211030700', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '211041043', 'curso': 'Engenharia de Software', 'semestre': '2', 'campus': 'FGA', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '202018126', 'curso': 'Farmácia ', 'semestre': '3', 'campus': 'FCE', 'confianca': 'sim', 'vacinacao': 2, 'pior_modelo': 'online' }, { 'matricula': '170020291', 'curso': 'Engenharia de Software', 'semestre': '9', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'hibrido' }, { 'matricula': '180028308', 'curso': 'Engenharia de Software', 'semestre': '8', 'campus': 'FGA', 'confianca': 'nao', 'vacinacao': 2, 'pior_modelo': 'presencial' }]



function post(url, body) {
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function () {
    console.log(this.responseText)
    // location = "capa.html"
    if (this.responseText == '{ "statusCode": 200 }') {
      console.log('passei aqui')
    }
  }
  return request.responseText

}
console.log(data[0].pior_modelo)

function enviar() {
  for (var i = 0; i < data.length; i++) {
    let url = "http://localhost:3000/plot"
    var body = {
      "matricula": data[i].matricula,
      "curso": data[i].curso,
      "semestre": data[i].semestre,
      "campus": data[i].campus,
      "confianca": data[i].confianca,
      "vacinacao": data[i].vacinacao,
      "pior_modelo": data[i].pior_modelo
    }
    post(url, body)
  }
}