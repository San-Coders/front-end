echo "Nettoyage du projet Next.js.............."
Del .next
Del node_modules
Del out
Del package-lock.json
echo "Réinstallation des dépendances...."
npm install
echo "Nettoyage du projet Next.js terminée"
pause