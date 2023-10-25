# Docker create image and upload
docker build -t edunzz/service-demo:latest .
<br>
docker login
<br>
docker push edunzz/service-demo:latest
<br>

# Up applications and services AKS
kubectl create namespace service-demo
<br>
kubectl apply -f service-demo.yaml -n service-demo
<br>
# Delete applications and services AKS
kubectl delete -f service-demo.yaml -n service-demo
<br>
