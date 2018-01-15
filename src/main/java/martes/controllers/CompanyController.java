package martes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import martes.domain.CompanyOptions;
import martes.repositories.OrganizationRepository;

@RestController
public class CompanyController {

    @Autowired
    private OrganizationRepository organizationRepository;

    @RequestMapping(value = "/api/companyOptions", method = RequestMethod.GET)
    public CompanyOptions getCompanyOptionData() {
        CompanyOptions companyOptions = new CompanyOptions();
        companyOptions.setOrganizations(organizationRepository.findAll());
        return companyOptions;
    }

}