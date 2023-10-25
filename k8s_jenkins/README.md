# Up applications and services AKS
kubectl apply -f jenkins.yaml
<br>
## extraer clave activación jenkins
kubectl exec -it {NOMBRE_DEL_POD} -- cat /var/jenkins_home/secrets/initialAdminPassword
<br>
user: jromero
<br>
password: gundam
<br>
# Delete applications and services AKS
kubectl delete -f jenkins.yaml
<br>
