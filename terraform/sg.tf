resource "aws_security_group" "web_servers" {
  name = "web-server-sg"
  description = "Allow http access from the world"
  vpc_id      = module.vpc.vpc_id

  #inbound
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "http access"
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "ssh access"
  }

#  ingress {
#    from_port   = 3000
#    to_port     = 3000
#    protocol    = "tcp"
#    security_groups = [aws_security_group.web_server_lb.id]
#  }
#
#  ingress {
#    from_port   = 3001
#    to_port     = 3001
#    protocol    = "tcp"
#    security_groups = [aws_security_group.web_server_lb.id]
#  }
  #outbound
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_ssh_http"
  }
}

#Access from the world to our ALB

resource "aws_security_group" "web_server_lb" {
  name = "web-server-LB-sg"
  description = "Allow http access from the world"
  vpc_id      = module.vpc.vpc_id
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}
#Access between the ALB to the application in the App porr

resource "aws_security_group" "internal" {
  name = "web-server-internal"
  description = "Allow traffic between LB and servers"
  vpc_id      = module.vpc.vpc_id
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    self        = true
  }
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}
