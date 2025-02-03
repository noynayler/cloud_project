locals {
  common_tags = {
    owner = "YourName" # Replace with a placeholder or leave as is
    usage = "project"
  }
  vpc_name       = "cloud-project"  # A name for the VPC
  cidr           = "10.10.0.0/16"   # The IP range for the VPC
  public_subnets = ["10.10.0.0/20", "10.10.16.0/20"] # IP ranges for public subnets

  ec2_key_name   = "kube"
  app_ami        = "ami-0a456b7b47dbf14eb"
  instance_type  = "t2.micro"       # Generalized instance type
}