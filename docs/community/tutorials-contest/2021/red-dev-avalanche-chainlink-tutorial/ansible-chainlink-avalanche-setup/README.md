# reddev infrastructure automation repository

Setup requirements:
1. Ansible v2.9.9 or later
2. Get Vultr.com API key from https://my.vultr.com/settings/#settingsapi
3. Create file at ~/.vultr.ini and fill in your API key like so:
```
[reddev]
key = quertyuiop123456789
timeout = 60
 ```

## Development server creation with vps

1. Run `ansible-playbook -i inventory tasks/createvultrvps.yml`
2. Follow directions to create new development server in Vulr
3. Run `ansible-playbook -i inventory tasks/provision.yml`
4. Follow directions to provision the newly created development server

## Development server creation within same host

1. Run `ansible-playbook tasks/provision_localhost.yml`
